var db_mensagens_inicial = {
    "data": [
                { "id": 1, "opcao": "Ataque DDoS", "categoria": "informativa", "tipo": "Informativa", "data": "2023-06-01", "conteudo": "Um ataque DDoS (Distributed Denial of Service) visa sobrecarregar um servidor com tráfego para torná-lo indisponível." },
                { "id": 2, "opcao": "Injeção SQL", "categoria": "informativa", "tipo": "Informativa", "data": "2023-06-02", "conteudo": "Injeção SQL é uma técnica de ataque onde comandos SQL são inseridos em campos de entrada para manipular o banco de dados." },
                { "id": 3, "opcao": "Phishing", "categoria": "informativa", "tipo": "Informativa", "data": "2023-06-03", "conteudo": "Phishing é uma tentativa de obter informações sensíveis enganando as pessoas para que divulguem dados pessoais." },
                { "id": 4, "opcao": "Malware", "categoria": "informativa", "tipo": "Informativa", "data": "2023-06-04", "conteudo": "Malware é um software malicioso projetado para danificar, interromper ou ganhar acesso não autorizado a sistemas de computador." },
                { "id": 5, "opcao": "Ransomware", "categoria": "informativa", "tipo": "Informativa", "data": "2023-06-05", "conteudo": "Ransomware é um tipo de malware que criptografa os dados da vítima e exige um resgate para restaurar o acesso." }
            ]
};

var db = JSON.parse(localStorage.getItem('db_mensagens'));
if (!db) {
    db = db_mensagens_inicial;
};

function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertMensagem(mensagem) {
    let novoId = 1;
    if (db.data.length != 0) 
        novoId = db.data[db.data.length - 1].id + 1;
    let novaMensagem = {
        "id": novoId,
        "opcao": mensagem.opcao,
        "categoria": mensagem.categoria,
        "tipo": mensagem.tipo,
        "data": mensagem.data,
        "conteudo": mensagem.conteudo
    };

    db.data.push(novaMensagem);
    displayMessage("Mensagem inserida com sucesso");

    localStorage.setItem('db_mensagens', JSON.stringify(db));
}

function updateMensagem(id, mensagem) {
    let index = db.data.map(obj => obj.id).indexOf(id);

    db.data[index].opcao = mensagem.opcao;
    db.data[index].categoria = mensagem.categoria;
    db.data[index].tipo = mensagem.tipo;
    db.data[index].data = mensagem.data;
    db.data[index].conteudo = mensagem.conteudo;

    displayMessage("Mensagem alterada com sucesso");

    localStorage.setItem('db_mensagens', JSON.stringify(db));
}

function deleteMensagem(id) {    
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Mensagem removida com sucesso");

    localStorage.setItem('db_mensagens', JSON.stringify(db));
}

function ListaMensagens() {
    
    let fd = $("#filtro_data").val();
    let fcg = $("#filtro_categoria").val();

    $("#table-mensagens").empty();

    for (let index = 0; index < db.data.length; index++) {
        const mensagem = db.data[index];

        if (((mensagem.data == fd) || (fd == '')) &&
            ((mensagem.categoria == fcg) || (fcg == ''))) {
              
            $("#table-mensagens").append(`<tr><td scope="row">${mensagem.id}</td>
                                            <td>${mensagem.opcao}</td>
                                            <td>${mensagem.categoria}</td>
                                            <td>${mensagem.tipo}</td>
                                            <td>${mensagem.data}</td>
                                            <td>${mensagem.conteudo}</td>
                                        </tr>`);
        }
    }
}
