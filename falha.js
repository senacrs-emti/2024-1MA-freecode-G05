document.addEventListener("DOMContentLoaded", function () {
    const elemento = document.getElementById("votar"); // Substitua "meuElemento" pelo ID do seu elemento
    const url = "base.html#pulsacao"; // Substitua pela URL desejada

    elemento.addEventListener("click", function () {
        window.location.href = url;
    });
});