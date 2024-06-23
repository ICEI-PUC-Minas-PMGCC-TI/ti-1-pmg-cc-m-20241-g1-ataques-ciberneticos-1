document.addEventListener("DOMContentLoaded", function() {
    const noticiasContainer = document.querySelector(".row");
    const noticias = jsonData.noticias;
    noticias.forEach(noticiasItem => {
        noticiasContainer.innerHTML += createNewsCard(noticiasItem);
    });

    document.getElementById("botaoAleatorio").addEventListener("click", function() {
        alert("Botão Aleatório clicado!");
    });
});

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../images/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "../images/close_white_36dp.svg";
    }
}

const jsonData = {
    "noticias": [
          {
              "titulo": "Vazamento de dados: o que é, como ocorre e como se proteger",
              "resumo": "O vazamento de dados é um problema que, infelizmente, vem se tornando cada vez mais comum. O alvo principal são consumidores desprotegidos nos ambientes virtuais e empresas que lidam com uma grande quantidade de informações dos seus clientes.",
              "data": "27/10/2022",
              "fonte": "cora.com",
              "url": "https://www.cora.com.br/blog/vazamento-de-dados/"
          },
          {
              "titulo": "Segurança na Internet: conheça 6 maneiras para se proteger de vazamento de dados",
              "resumo": "Ataques ocorrem na tentativa de criminosos de obter ganhos financeiros até a exposição deliberada de informações confidenciais de uma empresa.",
              "data": "22/08/2023",
              "fonte": "exame.com",
              "url": "https://exame.com/tecnologia/seguranca-na-internet-conheca-6-maneiras-para-se-proteger-de-vazamento-de-dados/"
          },
          {
              "titulo": "26 bilhões de dados: veja se você está no maior vazamento da história",
              "resumo": "O vazamento de dados de usuários de plataformas como X (antigo Twitter) e Telegram, além de instituições e empresas brasileiras.",
              "data": "23/01/2024",
              "fonte": "olhardigital.com.br",
              "url": "https://olhardigital.com.br/2024/01/23/seguranca/26-bilhoes-de-dados-veja-se-voce-esta-no-maior-vazamento-da-historia/#google_vignette"
          },
          {
              "titulo": "Facebook é condenado a pagar R$ 20 milhões por vazamento de dados de usuários",
              "resumo": "A Justiça de Minas Gerais condenou o Facebook por dano moral coletivo e individual pelos episódios de vazamentos de dados de usuários da rede social, do Messenger e também do aplicativo de mensagem WhatsApp, que ocorreram nos anos de 2018 e 2019.",
              "data": "27/07/2023",
              "fonte": "cnnbrasil.com.br",
              "url": "https://www.cnnbrasil.com.br/nacional/facebook-e-condenado-a-pagar-r-20-milhoes-por-vazamento-de-dados-de-usuarios/"
          },
          {
              "titulo": "Megavazamento de dados de 223 milhões de brasileiros: o que se sabe e o que falta saber",
              "resumo": "Número é maior do que a população do país, estimada em 212 milhões, porque inclui dados de falecidos. Informações expostas incluem CPF, nome, sexo e data de nascimento, além de uma tabela com dados de veículos e uma lista com CNPJs. Origem dos dados ainda é desconhecida.",
              "data": "28/01/2021",
              "fonte": "tecmundo.com.br",
              "url": "https://g1.globo.com/economia/tecnologia/noticia/2021/01/28/vazamento-de-dados-de-223-milhoes-de-brasileiros-o-que-se-sabe-e-o-que-falta-saber.ghtml"
          },
          {
              "titulo": "Banco Central anuncia vazamento de mais de 2 mil chaves Pix ligadas à LogBank",
              "resumo": "Autarquia informou que nenhum dado sensível foi vazado, no terceiro caso desde o lançamento do Pix",
              "data": "03/02/2022",
              "fonte": "g1.globo.com",
              "url": "https://www.cnnbrasil.com.br/economia/banco-central-anuncia-vazamento-de-mais-de-2-mil-chaves-pix-ligadas-a-logbank/"
          }
    ]
  };

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
