document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const signupSuccess = document.getElementById('signupSuccess');
    const signupFail = document.getElementById('signupFail');
    const loginSuccess = document.getElementById('loginSuccess');
    const loginFail = document.getElementById('loginFail');

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const user = {
                name: name,
                email: email,
                password: password
            };

            localStorage.setItem('user', JSON.stringify(user));
            signupSuccess.style.display = 'block';
            signupFail.style.display = 'none';
            setTimeout(() => {
                window.location.href = 'signin.html';
            }, 2000);
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const storedUser = JSON.parse(localStorage.getItem('user'));

            if (storedUser && storedUser.email === email && storedUser.password === password) {
                localStorage.setItem('token', 'loggedIn');
                localStorage.setItem('userLogado', JSON.stringify(storedUser));
                loginSuccess.style.display = 'block';
                loginFail.style.display = 'none';
                setTimeout(() => {
                    window.location.href = '../index.html';
                }, 2000);
            } else {
                loginFail.style.display = 'block';
                loginSuccess.style.display = 'none';
            }
        });
    }
});