var db = '';

function pegaResponses() {
    fetch('./responses.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o arquivo JSON');
            }
            return response.json();
        })
        .then(data => {
            db = data 
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}


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
