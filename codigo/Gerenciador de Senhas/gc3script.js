document.getElementById('gc-show-password').addEventListener('mousedown', function(event) {
    event.preventDefault();
    const passwordInput = document.getElementById('gc-password');
    passwordInput.type = (passwordInput.type === 'password') ? 'text' : 'password';
});

document.getElementById('gc-send-name').addEventListener('click', function() {
    document.getElementById('gc-password').focus();
});

function createDeleteButton() {
    const deleteButton = document.createElement('button');

        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteButton.classList.add('delete-password');
        deleteButton.style.background = "none";
        deleteButton.style.padding = "5px 10px";
        deleteButton.style.cursor = "pointer";  
        deleteButton.style.border = "none";

    return deleteButton;
}

document.getElementById('gc-send-login').addEventListener('click', function() {
    const nome = document.getElementById('gc-nome').value;
    const senha = document.getElementById('gc-password').value;
    if (nome.trim() !== "" && senha.trim() !== "") {
        const li = document.createElement('li');
        const textContainer = document.createElement('div');
        textContainer.innerHTML = nome + "<br>" + senha;

        li.appendChild(textContainer);
            li.style.border = "2px solid #000";
            li.style.padding = "10px";
            li.style.margin = "5px 0";
            li.style.borderRadius = "5px";
            li.style.display = "flex";
            li.style.justifyContent = "space-between";
            li.style.alignItems = "center";

        const deleteButton = createDeleteButton();
        deleteButton.style.marginLeft = "20px";
        deleteButton.addEventListener('click', function() {
            li.remove();
        });
        li.appendChild(deleteButton);   
        document.getElementById('gc-password-list').appendChild(li);
        document.getElementById('gc-nome').value = '';
        document.getElementById('gc-password').value = '';
        document.getElementById('gc-nome').focus();
    } else {
        alert("Por favor, preencha ambos os campos de nome e senha.");
    }
});

document.getElementById('gc-nome').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('gc-password').focus();
    }
});

document.getElementById('gc-password').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('gc-send-login').click();
    }
});
