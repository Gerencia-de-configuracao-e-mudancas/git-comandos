let cards = document.querySelectorAll(".card");
let opiniao = document.querySelector("#opiniao");
let botaoSim = document.querySelector("#sim");
let botaoNao = document.querySelector("#nao");

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 75 * i)
    });
}
const titulo = document.querySelector('h1');
typeWriter(titulo);
typeWriter(document.querySelector('h3'));

botaoSim.addEventListener("click", function () {
    opiniao.textContent = `Agradecemos sua visita. Volte sempre :)`;
});

botaoNao.addEventListener("click", function () {
    let corpo = document.querySelector("body");
    let texto = document.createElement("p");
    let i = 0;
    opiniao.style.display = "none";

    var elemento = document.querySelector(".cabecalho");
    elemento.parentNode.removeChild(elemento);

    while (cards[i] != undefined) {
        cards[i].style.display = "none";
        i++;
    }

    setTimeout(function () {
        texto.textContent = `Então`;
        corpo.appendChild(texto);

    }, 5000);
    setTimeout(function () {
        texto.textContent = `Nesse caso`;
        corpo.appendChild(texto);
    }, 10000);
    setTimeout(function () {
        texto.textContent = `Fique sem ver a página`;
        corpo.appendChild(texto);
    }, 15000);
    setTimeout(function () {
        texto.textContent = `Não volte sempre ):`;
        corpo.appendChild(texto);
    }, 60000);
});