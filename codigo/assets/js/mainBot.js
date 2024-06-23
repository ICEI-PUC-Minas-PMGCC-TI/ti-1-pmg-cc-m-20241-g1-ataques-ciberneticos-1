function initializeChatbot() {
    addMessage('bot', 'Olá, eu sou o GuardBot. Irei te ajudar a manter-se mais seguro(a) na internet!\nSelecione uma das opções abaixo:\n1. Ataque DDoS\n2. Injeção SQL\n3. Spam\n4. Phishing\n5. Engenharia Social');
}

function handleSendButtonClick() {
    const userInput = document.getElementById('user-input').value;
    if (isValidInput(userInput)) {
        addMessage('user', userInput);
        document.getElementById('user-input').value = '';
        getResponse(userInput);
    } else {
        alert('Por favor, digite um número entre 1 e 5.');
        document.getElementById('user-input').value = '';
    }
}

function isValidInput(input) {
    const validNumbers = ['1', '2', '3', '4', '5'];
    return validNumbers.includes(input);
}

function addMessage(sender, text, imageUrl = null, sourceUrl = null) {
    const chatBox = document.getElementById('chat-box');
    const message = document.createElement('div');
    message.className = `message ${sender}`;

    const img = document.createElement('img');
    img.src = sender === 'bot' ? '../assets/images/bot.png' : '../assets/images/botuser.png';
    img.alt = sender === 'bot' ? 'Bot' : 'Usuário';
    img.style.width = '50px';
    img.style.height = '50px';

    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';

    messageContent.innerHTML = text.replace(/\n/g, '<br>');

    message.appendChild(img);
    message.appendChild(messageContent);
    chatBox.appendChild(message);

    if (sourceUrl) {
        const linkMessage = document.createElement('div');
        linkMessage.className = `message ${sender}`;
        
        const link = document.createElement('a');
        link.href = sourceUrl;
        link.textContent = 'Fonte';
        link.target = '_blank';
        
        linkMessage.appendChild(img.cloneNode()); 
        linkMessage.appendChild(link);

        chatBox.appendChild(linkMessage);
    }

    if (imageUrl) {
        const imageMessage = document.createElement('div');
        imageMessage.className = `message ${sender} message-image`;
        
        const image = document.createElement('img');
        image.src = imageUrl;
        image.alt = 'Imagem da resposta do bot';
        image.style.width = '200px';
        image.style.height = 'auto';

        imageMessage.appendChild(img.cloneNode());
        imageMessage.appendChild(image);

        chatBox.appendChild(imageMessage);
    }

    chatBox.scrollTop = chatBox.scrollHeight;
}

async function getResponse(userInput) {
    const response = await fetch('../assets/js/responses.json');
    const data = await response.json();
    const reply = data.responses[userInput];
    const replyText = reply.text || 'Desculpe, não entendi.';
    const replyImage = reply.image || null;
    const replySource = reply.source || null;

    setTimeout(() => {
        addMessage('bot', replyText, replyImage, replySource);
    }, 500);
}
