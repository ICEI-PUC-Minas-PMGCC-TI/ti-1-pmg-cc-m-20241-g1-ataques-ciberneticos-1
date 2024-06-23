function carregarDados() {
    let dadosArmazenados = localStorage.getItem('db');
    let dados = {};

    if (dadosArmazenados) {
        dados = JSON.parse(dadosArmazenados);
    } else {
        dados = {
            urls: []
        };
    }

    return dados;
}

function salvarDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
}

function incluirUrl() {
    let dados = carregarDados();

    let nome = document.querySelector('.id').value;
    let url = document.querySelector('.categoria').value;
    let confiavel = document.querySelector('.confianca').value; // Correção aqui

    let novaUrl = {
        nome: nome,
        url: url,
        confiavel: confiavel
    };

    dados.urls.push(novaUrl);

    salvarDados(dados);

    listarUrls();
}

function listarUrls() {
    let tabela = document.querySelector('.news-table');
    let dados = carregarDados();
    let corpoTabela = tabela.querySelector('tbody') || tabela.createTBody(); // Se o tbody não existir, crie um
    let html = '';

    corpoTabela.innerHTML = '';

    for (let i = 0; i < dados.urls.length; i++) {
        let novaLinha = corpoTabela.insertRow();

        let selecaoCell = novaLinha.insertCell(); // Célula para a seleção
        let nomeCell = novaLinha.insertCell();
        let urlCell = novaLinha.insertCell();
        let confiavelCell = novaLinha.insertCell();

        // Adiciona um checkbox para seleção
        selecaoCell.innerHTML = `<input type="checkbox" class="selecionar-url">`;

        nomeCell.textContent = dados.urls[i].nome;
        urlCell.textContent = dados.urls[i].url;
        confiavelCell.textContent = dados.urls[i].confiavel;
    }
}

function excluirSelecionados() {
    let dados = carregarDados();
    let checkboxes = document.querySelectorAll('.selecionar-url');

    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            dados.urls.splice(index, 1);
        }
    });

    salvarDados(dados);
    listarUrls();
}

document.querySelector('.button1').addEventListener('click', incluirUrl);
document.querySelector('.button4').addEventListener('click', () => {
    document.querySelector('.id').value = '';
    document.querySelector('.categoria').value = '';
    document.querySelector('.confianca').value = ''; // Correção aqui
});

document.querySelector('.button3').addEventListener('click', excluirSelecionados);

// Ao carregar a página, lista as URLs existentes
listarUrls();
