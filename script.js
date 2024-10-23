document.getElementById("meuBotao").addEventListener("click", function() {
        const elemento = document.getElementById("meuElemento");

        // Verifica a classe atual e troca para a outra
        if (elemento.classList.contains("header")) {
            elemento.classList.remove("header");
            elemento.classList.add("newone");
        } else {
            elemento.classList.remove("newone");
            elemento.classList.add("header");
        }
    });

