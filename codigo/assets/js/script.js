// Verifica se o usuário está logado ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    checkLogin();
});

// Função para verificar se o usuário está logado
function checkLogin() {
    const token = localStorage.getItem('token');
    const userLogado = JSON.parse(localStorage.getItem('userLogado'));
    
    if (!token || !userLogado) {
        // Usuário não está logado, redireciona para página de login
        alert("Você precisa estar logado para acessar essa página");
        setTimeout(() => {
            window.location.href = '../../pages/signin.html';
        }, 1000);
    } else {
        // Usuário está logado, exibe saudação e carrega as notícias
        alert(`Olá ${userLogado.nome}`);
        loadNews();
    }
}

// Função para carregar as notícias após o login
function loadNews() {
    const noticiasContainer = document.querySelector('.row');
    const noticias = jsonData.noticias;
    
    noticias.forEach(noticiasItem => {
        noticiasContainer.innerHTML += createNewsCard(noticiasItem);
    });

    // Adiciona evento ao botão aleatório (exemplo)
    document.getElementById('botaoAleatorio').addEventListener('click', function() {
        alert('Botão Aleatório clicado!');
    });
}

function apagarContas() {
    // Redirecionar para a página de login
    window.location.href = '../../pages/signin.html';
}


// Função para criar o HTML de um card de notícia
function createNewsCard(noticiasItem) {
    return `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${noticiasItem.titulo}</h5>
                    <p class="card-text">${noticiasItem.resumo}</p>
                    <a href="${noticiasItem.url}" class="btn btn-primary" target="_blank">Leia mais</a>
                </div>
                <div class="card-footer">
                    <small class="text-muted">${noticiasItem.data}</small>
                </div>
            </div>
        </div>`;
}

// Função para sair da conta (remover token e usuário do localStorage)
function sair() {
    localStorage.removeItem('token');
    localStorage.removeItem('userLogado');
    window.location.href = '../pages/signin.html';
}

// Função para mostrar/ocultar o menu mobile
function menuShow() {
    const menuMobile = document.querySelector('.mobile-menu');
    const icon = document.querySelector('.icon');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        icon.src = '../images/menu_white_36dp.svg';
    } else {
        menuMobile.classList.add('open');
        icon.src = '../images/close_white_36dp.svg';
    }
}

// Dados simulados de notícias (substituir por dados reais obtidos dinamicamente)
const jsonData = {
    "noticias": [
        {
            "titulo": "Vazamento de dados: o que é, como ocorre e como se proteger",
            "resumo": "O vazamento de dados se torna um problema cada vez mais comum. Consumidores desprotegidos e empresas com muitas informações dos clientes são os principais alvos.",
            "data": "27/10/2022",
            "fonte": "cora.com",
            "url": "https://www.cora.com.br/blog/vazamento-de-dados/"
        },
        {
            "titulo": "Segurança na Internet: conheça 6 maneiras para se proteger de vazamento de dados",
            "resumo": "Criminosos atacam para obter ganhos financeiros ou expor deliberadamente informações confidenciais de empresas.",
            "data": "22/08/2023",
            "fonte": "exame.com",
            "url": "https://exame.com/tecnologia/seguranca-na-internet-conheca-6-maneiras-para-se-proteger-de-vazamento-de-dados/"
        },
        {
            "titulo": "26 bilhões de dados: veja se você está no maior vazamento da história",
            "resumo": "Dados de usuários de plataformas como X (antigo Twitter), Telegram, além de empresas e instituições brasileiras foram vazados.",
            "data": "23/01/2024",
            "fonte": "olhardigital.com.br",
            "url": "https://olhardigital.com.br/2024/01/23/seguranca/26-bilhoes-de-dados-veja-se-voce-esta-no-maior-vazamento-da-historia/#google_vignette"
        },
        {
            "titulo": "Facebook é condenado a pagar R$ 20 milhões por vazamento de dados de usuários",
            "resumo": "A Justiça de Minas Gerais condenou o Facebook por vazamento de dados de usuários da rede social, do Messenger e do WhatsApp, ocorridos em 2018 e 2019, por dano moral coletivo e individual.",
            "data": "27/07/2023",
            "fonte": "cnnbrasil.com.br",
            "url": "https://www.cnnbrasil.com.br/nacional/facebook-e-condenado-a-pagar-r-20-milhoes-por-vazamento-de-dados-de-usuarios/"
        },
        {
            "titulo": "Megavazamento de dados de 223 milhões de brasileiros: o que se sabe e o que falta saber",
            "resumo": "O número é maior que a população de 212 milhões, pois inclui falecidos. Informações vazadas incluem CPF, nome, sexo, data de nascimento, dados de veículos e CNPJs. A origem ainda é desconhecida.",
            "data": "28/01/2021",
            "fonte": "tecmundo.com.br",
            "url": "https://g1.globo.com/economia/tecnologia/noticia/2021/01/28/vazamento-de-dados-de-223-milhoes-de-brasileiros-o-que-se-sabe-e-o-que-falta-saber.ghtml"
        },
        {
            "titulo": "Banco Central anuncia vazamento de mais de 2 mil chaves Pix ligadas à LogBank",
            "resumo": "A autarquia informou que nenhum dado sensível vazou, sendo este o terceiro caso desde o lançamento do Pix.",
            "data": "03/02/2022",
            "fonte": "g1.globo.com",
            "url": "https://www.cnnbrasil.com.br/economia/banco-central-anuncia-vazamento-de-mais-de-2-mil-chaves-pix-ligadas-a-logbank/"
        }
    ]
};
