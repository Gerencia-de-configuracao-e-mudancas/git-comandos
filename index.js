let cards = document.querySelectorAll(".card");
let opiniao = document.querySelector("#opiniao");
let botaoSim = document.querySelector("#sim");
let botaoNao = document.querySelector("#nao");

botaoSim.addEventListener("click", function() {
   opiniao.textContent = `Agradecemos sua visita. Volte sempre :)`;
});

botaoNao.addEventListener("click", function() {
    let corpo = document.querySelector("body");
    let texto = document.createElement("p");
    let i = 0;
    opiniao.style.display = "none";

    while (cards[i] != undefined) {
        cards[i].style.display = "none";
        i++;
    }

    setTimeout(function() {
        texto.textContent = `Então`;
        corpo.appendChild(texto);

    }, 5000);
    setTimeout(function() {
        texto.textContent = `Nesse caso`;
        corpo.appendChild(texto);
    }, 10000);
    setTimeout(function() {
        texto.textContent = `Fique sem ver a página`;
        corpo.appendChild(texto);
    }, 15000);
    setTimeout(function () {
        texto.textContent = `Não volte sempre ):`;
        corpo.appendChild(texto);
    }, 60000);
});