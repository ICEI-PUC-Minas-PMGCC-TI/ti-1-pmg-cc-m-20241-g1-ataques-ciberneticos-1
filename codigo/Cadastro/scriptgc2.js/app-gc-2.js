// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Vazamento de dados: o que é, como ocorre e como se proteger",
            "cidade": "Belo Horizonte",
            "categoria": "noticia",
            "email": "vazamento@gmail.com",
            "telefone": "31987654321",
            "website": "https://www.cora.com.br/blog/vazamento-de-dados/"
        },
        {
            "id": 2,
            "nome": "Segurança na Internet: conheça 6 maneiras para se proteger de vazamento de dados",
            "cidade": "Belo Horizonte",
            "categoria": "noticia",
            "email": "vazamento@gmail.com",
            "telefone": "31987654321",
            "website": "https://exame.com/tecnologia/seguranca-na-internet-conheca-6-maneiras-para-se-proteger-de-vazamento-de-dados/"
        },
        {
            "id": 3,
            "nome": "26 bilhões de dados: veja se você está no maior vazamento da história",
            "cidade": "Belo Horizonte",
            "categoria": "noticia",
            "email": "vazamento@gmail.com",
            "telefone": "31987654321",
            "website": "ramiro.info"
        },
        {
            "id": 4,
            "nome": "Facebook é condenado a pagar R$ 20 milhões por vazamento de dados de usuários",
            "cidade": "Belo Horizonte",
            "categoria": "noticia",
            "email": "vazamento@gmail.com",
            "telefone": "31987654321",
            "website": "https://www.cnnbrasil.com.br/nacional/facebook-e-condenado-a-pagar-r-20-milhoes-por-vazamento-de-dados-de-usuarios/"
        },
        {
            "id": 5,
            "nome": "Megavazamento de dados de 223 milhões de brasileiros: o que se sabe e o que falta saber	",
            "cidade": "Belo Horizonte",
            "categoria": "noticia",
            "email": "vazamento@gmail.com",
            "telefone": "31987654321",
            "website": "https://g1.globo.com/economia/tecnologia/noticia/2021/01/28/vazamento-de-dados-de-223-milhoes-de-brasileiros-o-que-se-sabe-e-o-que-falta-saber.ghtml"
        },
        {
            "id": 6,
            "nome": "Banco Central anuncia vazamento de mais de 2 mil chaves Pix ligadas à LogBank Autarquia info	",
            "cidade": "Belo Horizonte",
            "categoria": "noticia",
            "email": "vazamento@gmail.com",
            "telefone": "31987654321",
            "website": "https://www.cnnbrasil.com.br/economia/banco-central-anuncia-vazamento-de-mais-de-2-mil-chaves-pix-ligadas-a-logbank/"
        }
    
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "email" : contato.email,
        "telefone": contato.telefone,
        "cidade" : contato.cidade,
        "categoria": contato.categoria,
        "website": contato.website
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = contato.nome,
    db.data[index].email = contato.email,
    db.data[index].telefone = contato.telefone,
    db.data[index].cidade = contato.cidade,
    db.data[index].categoria = contato.categoria,
    db.data[index].website = contato.website

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}