var header = document.getElementById("meuElemento");
var atras = document.getElementById("branco");
const btn2 = document.getElementById('btn2');

btn2.addEventListener('click', () => {
    // Alternar entre as classes com uma animação suave
    if (header.classList.contains("header")) {
        // Transição para 'header2' com altura reduzida e topo alterado
        header.classList.replace("header", "header2");
        btn2.classList.replace("btn2", "btn2cima");
        branco.classList.remove("headerdefundo");
    } else {
        // Voltar para o estado original
        header.classList.replace("header2", "header");
        btn2.classList.replace("btn2cima", "btn2");
        branco.classList.add("headerdefundo");
    }

    console.log(header.className);
});
