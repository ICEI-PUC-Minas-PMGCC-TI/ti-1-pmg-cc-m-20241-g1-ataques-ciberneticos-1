async function verifyLink() {
    const url = document.getElementById('urlInput').value;
    const resultDiv = document.getElementById('result');
    
    if (!isValidURL(url)) {
        resultDiv.textContent = 'Por favor, insira um URL válido.';
        resultDiv.style.color = 'red';
        return;
    }

    let isTrusted = false;
    let found = false; // Variável para indicar se a URL foi encontrada no JSON
    try {
        const response = await fetch('urls.json');
        const data = await response.json();
        const { urls } = data;
        found = urls.some(item => {
            if (item.url === url) {
                isTrusted = item.trusted;
                return true;
            }
            return false;
        });
    } catch (error) {
        console.error('Erro ao carregar URLs.');
    }

    if (found) {
        if (isTrusted) {
            resultDiv.textContent = 'O URL é confiável.';
            resultDiv.style.color = 'green';
        } else {
            resultDiv.textContent = 'O URL não é confiável.';
            resultDiv.style.color = 'red';
        }
    } else {
        resultDiv.textContent = 'Não temos certeza da confiabilidade deste URL.';
        resultDiv.style.color = 'orange';
    }
}

function isValidURL(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}