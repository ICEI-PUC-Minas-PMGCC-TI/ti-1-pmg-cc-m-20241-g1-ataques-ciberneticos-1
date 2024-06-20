const strengthIndicator = document.querySelector(".strength-indicator");
const passwordInput = document.querySelector("input");
const weakStrength = document.querySelector(".weak");
const mediumStrength = document.querySelector(".medium");
const strongStrength = document.querySelector(".strong");
const strengthText = document.querySelector(".strength-text");
const showButton = document.querySelector(".showBtn");
let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

function validatePassword() {
    if (passwordInput.value != "") {
        strengthIndicator.style.display = "block";
        strengthIndicator.style.display = "flex";
        if (
            passwordInput.value.length <= 3 &&
            (passwordInput.value.match(regExpWeak) ||
                passwordInput.value.match(regExpMedium) ||
                passwordInput.value.match(regExpStrong))
        )
            no = 1;
        if (
            passwordInput.value.length >= 6 &&
            ((passwordInput.value.match(regExpWeak) &&
                    passwordInput.value.match(regExpMedium)) ||
                (passwordInput.value.match(regExpMedium) &&
                    passwordInput.value.match(regExpStrong)) ||
                (passwordInput.value.match(regExpWeak) &&
                    passwordInput.value.match(regExpStrong)))
        )
            no = 2;
        if (
            passwordInput.value.length >= 6 &&
            passwordInput.value.match(regExpWeak) &&
            passwordInput.value.match(regExpMedium) &&
            passwordInput.value.match(regExpStrong)
        )
            no = 3;
        if (no == 1) {
            weakStrength.classList.add("active");
            strengthText.style.display = "block";
            strengthText.textContent = "Sua senha é fraca";
            strengthText.classList.add("weak");
        }
        if (no == 2) {
            mediumStrength.classList.add("active");
            strengthText.textContent = "Sua senha é mediana";
            strengthText.classList.add("medium");
        } else {
            mediumStrength.classList.remove("active");
            strengthText.classList.remove("medium");
        }
        if (no == 3) {
            weakStrength.classList.add("active");
            mediumStrength.classList.add("active");
            strongStrength.classList.add("active");
            strengthText.textContent = "Sua senha é forte";
            strengthText.classList.add("strong");
        } else {
            strongStrength.classList.remove("active");
            strengthText.classList.remove("strong");
        }
        showButton.style.display = "block";
        showButton.onclick = function () {
            if (passwordInput.type == "password") {
                passwordInput.type = "text";
                showButton.textContent = "ESCONDER";
                showButton.style.color = "#23ad5c";
            } else {
                passwordInput.type = "password";
                showButton.textContent = "MOSTRAR";
                showButton.style.color = "#000";
            }
        };
    } else {
        strengthIndicator.style.display = "none";
        strengthText.style.display = "none";
        showButton.style.display = "none";
    }
}