//   var imagens = [
//     "img/neko1.jpeg",
//     "img/neko2.jpeg",
//     "img/neko3.jpeg",
//     "img/neko4.jpg",
//      "img/neko1.jpeg",
//     "img/neko2.jpeg",
//     "img/neko3.jpeg",
//     "img/neko4.jpg"
    
//   ];

//   var nomes = [
//     'gato1',
//     'gato2',
//     'gato3',
//     'gato4',
//     'gato5',
//     'gato6',
//     'gato7',
//     'gato8',
//   ];

//   var paypey = [
//     'hasaheuashahe',
//     'gatonomatonaoparaqueto',
//     'quetonomatonaopara',
//     'avidacimsim',
//     'hasaheuashahe',
//     'gatonomatonaoparaqueto',
//     'quetonomatonaopara',
//     'avidacimsim',
//   ];

//   const container = document.getElementById("cards-container");

//   for (let i = 0; i < imagens.length; i++) {
//     // Cria um novo card baseado no padrão fornecido.
//     const card = document.createElement("div");
//     card.classList.add("card");
//     card.style.width = "18rem";

//     const imagem = document.createElement("img");
//     imagem.src = imagens[i];
//     imagem.classList.add("card-img-top");
//     imagem.alt = "Imagem do Card";

//     const cardBody = document.createElement("div");
//     cardBody.classList.add("card-body");

//     const titulo = document.createElement("h5");
//     titulo.classList.add("card-title");
//     titulo.textContent = nomes[i];

//     const paragrafo = document.createElement("p");
//     paragrafo.classList.add("card-text");
//     paragrafo.textContent = paypey[i];

//     const botao = document.createElement("a");
//     botao.href = "#";
//     botao.classList.add("btn", "btn-light");
//     botao.textContent = "Botão";

//     // Adiciona os elementos ao card.
//     card.appendChild(imagem);
//     card.appendChild(cardBody);
//     cardBody.appendChild(titulo);
//     cardBody.appendChild(paragrafo);
//     cardBody.appendChild(botao);

//     // Adiciona o card ao container.
//     container.appendChild(card);
//   }

console.log('ola mundo');

// Arrays com os dados
var nomes = [
    'gato1',
    'gato2',
    'gato3',
    'gato4',
    'gato5',
    'gato6',
    'gato7',
    'gato8',
  ];

var paypey = [
    'hasaheuashahe',
    'gatonomatonaoparaqueto',
    'quetonomatonaopara',
    'avidacimsim',
    'hasaheuashahe',
    'gatonomatonaoparaqueto',
    'quetonomatonaopara',
    'avidacimsim',
];

var imagens = [
    "img/neko1.jpeg",
    "img/neko2.jpeg",
    "img/neko3.jpeg",
    "img/neko4.jpg",
    "img/neko1.jpeg",
    "img/neko2.jpeg",
    "img/neko3.jpeg",
    "img/neko4.jpg"
];

// Encontre o elemento onde você deseja adicionar o conteúdo
var container = document.getElementById("carouselExample");

// Crie a estrutura do carrossel e seus itens
var carousel = document.createElement("div");
carousel.className = "carousel slide";
var carouselInner = document.createElement("div");
carouselInner.className = "carousel-inner";

for (var i = 0; i < imagens.length; i += 4) { // Modificado o incremento para 4
    var carouselItem = document.createElement("div");
    carouselItem.className = "carousel-item";
    if (i === 0) {
        carouselItem.classList.add("active");
    }

    var dFlexContainer = document.createElement("div");
    dFlexContainer.className = "d-flex justify-content-between";

    for (var j = i; j < i + 4 && j < imagens.length; j++) { // Carregar 4 elementos lado a lado
        var imageDiv = document.createElement("div");
        imageDiv.className = "p-2";

        var image = document.createElement("img");
        image.src = imagens[j];
        image.alt = nomes[j];
        image.width = "400";
        image.height = "200";

        var h5 = document.createElement("h5");
        h5.textContent = nomes[j];

        var p = document.createElement("p");
        p.textContent = paypey[j];

        imageDiv.appendChild(image);
        imageDiv.appendChild(h5);
        imageDiv.appendChild(p);

        dFlexContainer.appendChild(imageDiv);
    }

    carouselItem.appendChild(dFlexContainer);
    carouselInner.appendChild(carouselItem);
}

carousel.appendChild(carouselInner);

// Crie os botões de controle
var prevButton = document.createElement("button");
prevButton.className = "carousel-control-prev";
prevButton.type = "button";
prevButton.setAttribute("data-bs-target", "#carouselExample");
prevButton.setAttribute("data-bs-slide", "prev");

var prevIcon = document.createElement("span");
prevIcon.className = "carousel-control-prev-icon";
prevIcon.setAttribute("aria-hidden", "true");

var prevText = document.createElement("span");
prevText.className = "visually-hidden";
prevText.textContent = "Previous";

prevButton.appendChild(prevIcon);
prevButton.appendChild(prevText);

var nextButton = document.createElement("button");
nextButton.className = "carousel-control-next";
nextButton.type = "button";
nextButton.setAttribute("data-bs-target", "#carouselExample");
nextButton.setAttribute("data-bs-slide", "next");

var nextIcon = document.createElement("span");
nextIcon.className = "carousel-control-next-icon";
nextIcon.setAttribute("aria-hidden", "true");

var nextText = document.createElement("span");
nextText.className = "visually-hidden";
nextText.textContent = "Next";

nextButton.appendChild(nextIcon);
nextButton.appendChild(nextText);

// Adicione todos os elementos ao elemento do contêiner
carousel.appendChild(prevButton);
carousel.appendChild(nextButton);
container.appendChild(carousel);
