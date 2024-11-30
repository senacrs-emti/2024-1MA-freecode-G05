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
// Função para exibir sugestões
function showSuggestions() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const suggestionsBox = document.getElementById("suggestions");

    // IDs dos sistemas
    const systems = [
        { name: 'Cardiovascular', id: 'cardiovascular' },
        { name: 'Respiratório', id: 'respiratorio' },
        { name: 'Nervoso', id: 'nervoso' },
        { name: 'Digestório', id: 'digestivo' },
        { name: 'Endócrino', id: 'endocrino' },
        { name: 'Excretor', id: 'excretor' },
        { name: 'Urinário', id: 'urinario' },
        { name: 'Esquelético', id: 'esqueletico' },
        { name: 'Muscular', id: 'muscular' },
        { name: 'Imunológico', id: 'imunologico' },
        { name: 'Linfatico', id: 'linfa' },
        { name: 'Sensorial', id: 'sensitivo' },
        { name: 'Reprodutor', id: 'reprodutor' },
        { name: 'Tegumentar', id: 'tegumentar' }
    ];

    // Limpa sugestões anteriores
    suggestionsBox.innerHTML = '';

    if (query.length > 0) {
        // Filtra sugestões que correspondem à pesquisa
        const filteredSystems = systems.filter(system => system.name.toLowerCase().includes(query));

        // Exibe as sugestões
        filteredSystems.forEach(system => {
            const link = document.createElement('a');
            link.href = `#${system.id}`;
            link.innerText = system.name;
            suggestionsBox.appendChild(link);
        });

        // Exibe a caixa de sugestões
        suggestionsBox.style.display = 'block';
    } else {
        suggestionsBox.style.display = 'none';
    }
}

// Fecha a caixa de sugestões quando clica fora dela
window.addEventListener('click', function(e) {
    if (!document.querySelector('.header-search').contains(e.target)) {
        document.getElementById('suggestions').style.display = 'none';
    }
});
