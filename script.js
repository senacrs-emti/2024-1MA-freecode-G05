// Seleciona os elementos
var header = document.getElementById("meuElemento");
var branco = document.getElementById("branco");
const btn2 = document.getElementById("btn2");
const searchInputHeader = document.getElementById("search-input-header");
const suggestionsBoxHeader = document.getElementById("suggestions-header");
const searchInputBranco = document.getElementById("search-input-branco");
const suggestionsBoxBranco = document.getElementById("suggestions-branco");

let currentIndexHeader = -1; // Índice da sugestão selecionada para o header
let currentIndexBranco = -1; // Índice da sugestão selecionada para o branco

// Adiciona o evento de clique no botão
btn2.addEventListener("click", () => {
    if (header.classList.contains("header")) {
        // Troca para o estado header2
        header.classList.replace("header", "header2");
        btn2.classList.replace("btn2", "btn2cima");
        branco.classList.replace("headerdefundo2", "headerdefundo");

    } else {
        // Volta ao estado header
        header.classList.replace("header2", "header");
        btn2.classList.replace("btn2cima", "btn2");
        branco.classList.replace("headerdefundo", "headerdefundo2");
    }
    console.log(header.className); // Verifica qual classe está ativa no header
});
// Função para detectar quando a tecla Alt é pressionada
document.addEventListener("keydown", function(event) {
    if (event.key === ";") {
        btn2.click(); // Aciona o clique no botão btn2 quando a tecla Alt for pressionada
    }
});
// Função para exibir sugestões no header
function showSuggestionsHeader() {
    const query = searchInputHeader.value.toLowerCase();
    suggestionsBoxHeader.innerHTML = '';

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
        { name: 'Linfático', id: 'linfa' },
        { name: 'Sensorial', id: 'sensitivo' },
        { name: 'Reprodutor', id: 'reprodutor' },
        { name: 'Tegumentar', id: 'tegumentar' },
        { name: 'Vasos Sanguíneos', url: 'base.html#sanguineos' },
        { name: 'Artérias', url: 'base.html#arterias' },
        { name: 'Veias', url: 'base.html#veias' },
        { name: 'Vasos Capilares', url: 'base.html#vasoscapilares' },
        { name: 'Coração', url: 'base.html#coracao'},
        { name: 'Pulsação', url: 'base.html#pulsacao'},
        { name: 'Porção Condutora', url: 'respiratorio.html#porcaocondutora'},
        { name: 'Porção Respiratória', url: 'respiratorio.html#porcaorespi'},
        { name: 'Alvéolos Pulmonares', url: 'respiratorio.html#aoveolos'},
        { name: 'Bronquiolos', url: 'respiratorio.html#bronquiolos'},
        { name: 'Brônquios', url: 'respiratorio.html#bronquios'},
        { name: 'Respiração', url: 'respiratorio.html#respiracao'},
        { name: 'Boca', url: 'Digestório.html#boca'},
        { name: 'Faringe', url: 'Digestório.html#faringe'},
        { name: 'Esôfago', url: 'Digestório.html#esofago'},
        { name: 'Estômago', url: 'Digestório.html#estomago'},
        { name: 'Intestino Delgado', url: 'Digestório.html#intestinodelg'},
        { name: 'Intestino Grosso', url: 'Digestório.html#intestinogrosso'},
        { name: 'Sistema Central Nervoso', url: 'nervoso.html#nervosocentral'},
        { name: 'Encéfalo', url: 'nervoso.html#encefalo'},
        { name: 'Cérebro', url: 'nervoso.html#cerebro'},
    ];

    if (query.length > 0) {
        const filteredSystems = systems.filter(system => system.name.toLowerCase().includes(query));
        filteredSystems.forEach((system, index) => {
            const link = document.createElement('a');
            link.href = system.url || `#${system.id}`; // URL ou ID
            link.innerText = system.name;
            link.setAttribute('data-index', index);
            link.classList.add('suggestion-link');

            // Adiciona evento para esconder sugestões ao clicar
            link.addEventListener('click', () => {
                searchInputHeader.value = system.name; // Preenche o input com a sugestão
                suggestionsBoxHeader.style.display = 'none';
                currentIndexHeader = -1; // Reseta o índice
            });

            suggestionsBoxHeader.appendChild(link);
        });

        suggestionsBoxHeader.style.display = 'block';
    } else {
        suggestionsBoxHeader.style.display = 'none';
    }
}

// Função para exibir sugestões no branco
function showSuggestionsBranco() {
    const query = searchInputBranco.value.toLowerCase();
    suggestionsBoxBranco.innerHTML = '';

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
        { name: 'Linfático', id: 'linfa' },
        { name: 'Sensorial', id: 'sensitivo' },
        { name: 'Reprodutor', id: 'reprodutor' },
        { name: 'Tegumentar', id: 'tegumentar' },
        { name: 'Vasos Sanguíneos', url: 'base.html#sanguineos' },
    ];

    if (query.length > 0) {
        const filteredSystems = systems.filter(system => system.name.toLowerCase().includes(query));
        filteredSystems.forEach((system, index) => {
            const link = document.createElement('a');
            link.href = `#${system.id}`;
            link.innerText = system.name;
            link.setAttribute('data-index', index);
            link.classList.add('suggestion-link');

            // Adiciona evento para esconder sugestões ao clicar
            link.addEventListener('click', () => {
                searchInputBranco.value = system.name; // Preenche o input com a sugestão
                suggestionsBoxBranco.style.display = 'none';
                currentIndexBranco = -1; // Reseta o índice
            });

            suggestionsBoxBranco.appendChild(link);
        });

        suggestionsBoxBranco.style.display = 'block';
    } else {
        suggestionsBoxBranco.style.display = 'none';
    }
}

// Função para atualizar o foco das sugestões
function updateFocus(suggestionsBox, currentIndex) {
    const links = suggestionsBox.getElementsByTagName('a');
    if (links.length > 0) {
        // Remove o foco de todas as sugestões
        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove('highlight'); 
        }
        if (currentIndex >= 0 && currentIndex < links.length) {
            links[currentIndex].classList.add('highlight'); // Adiciona o foco à sugestão selecionada
        }
    }
}

// Navegação com setas para cima e para baixo no campo de header
searchInputHeader.addEventListener('input', function() {
    currentIndexHeader = -1; // Reseta o índice ao digitar novamente
    showSuggestionsHeader();
});

searchInputHeader.addEventListener('keydown', function(event) {
    const links = suggestionsBoxHeader.getElementsByTagName('a');

    if (event.key === 'ArrowDown') {
        if (currentIndexHeader < links.length - 1) {
            currentIndexHeader++;
        }
        updateFocus(suggestionsBoxHeader, currentIndexHeader);
        event.preventDefault(); // Impede o comportamento padrão da tecla
    } else if (event.key === 'ArrowUp') {
        if (currentIndexHeader > 0) {
            currentIndexHeader--;
        }
        updateFocus(suggestionsBoxHeader, currentIndexHeader);
        event.preventDefault(); // Impede o comportamento padrão da tecla
    } else if (event.key === 'Enter' && currentIndexHeader >= 0) {
        links[currentIndexHeader].click(); // Seleciona a sugestão
        event.preventDefault(); // Impede o comportamento padrão do Enter
    }
});

// Navegação com setas para cima e para baixo no campo de branco
searchInputBranco.addEventListener('input', function() {
    currentIndexBranco = -1; // Reseta o índice ao digitar novamente
    showSuggestionsBranco();
});

searchInputBranco.addEventListener('keydown', function(event) {
    const links = suggestionsBoxBranco.getElementsByTagName('a');

    if (event.key === 'ArrowDown') {
        if (currentIndexBranco < links.length - 1) {
            currentIndexBranco++;
        }
        updateFocus(suggestionsBoxBranco, currentIndexBranco);
        event.preventDefault(); // Impede o comportamento padrão da tecla
    } else if (event.key === 'ArrowUp') {
        if (currentIndexBranco > 0) {
            currentIndexBranco--;
        }
        updateFocus(suggestionsBoxBranco, currentIndexBranco);
        event.preventDefault(); // Impede o comportamento padrão da tecla
    } else if (event.key === 'Enter' && currentIndexBranco >= 0) {
        links[currentIndexBranco].click(); // Seleciona a sugestão
        event.preventDefault(); // Impede o comportamento padrão do Enter
    }
});
function updateFocus(suggestionsBox, currentIndex) {
    const links = suggestionsBox.getElementsByTagName('a');
    if (links.length > 0) {
        // Remove o foco de todas as sugestões
        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove('highlight');
        }
        if (currentIndex >= 0 && currentIndex < links.length) {
            const currentLink = links[currentIndex];
            currentLink.classList.add('highlight'); // Adiciona o foco à sugestão selecionada
            currentLink.scrollIntoView({
                behavior: 'smooth', // Movimento suave
                block: 'nearest', // Garante que o elemento fique visível
            });
        }
    }
}
// Função para encontrar o ID mais próximo
function findClosestId(query, systems) {
    let exactMatches = [];
    let closestSystem = null;
    let smallestDistance = Infinity;

    // Procura substrings ou prefixos exatos
    systems.forEach(system => {
        if (system.id.toLowerCase().includes(query)) {
            exactMatches.push(system);
        }
    });

    // Retorna o primeiro match exato, se houver
    if (exactMatches.length > 0) {
        return exactMatches[0];
    }

    // Se não houver match exato, utiliza a distância de Levenshtein
    systems.forEach(system => {
        const distance = calculateLevenshteinDistance(query, system.id.toLowerCase());
        if (distance < smallestDistance) {
            smallestDistance = distance;
            closestSystem = system;
        }
    });

    // Retorna o mais próximo se a distância for aceitável (máximo 3 letras de diferença)
    return smallestDistance <= 3 ? closestSystem : null;
}

// Configuração do Enter para o campo Header
searchInputHeader.addEventListener('keydown', function(event) {
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
        { name: 'Linfático', id: 'linfa' },
        { name: 'Sensorial', id: 'sensitivo' },
        { name: 'Reprodutor', id: 'reprodutor' },
        { name: 'Tegumentar', id: 'tegumentar' },
        { name: 'Vasos Sanguíneos', url: 'base.html#sanguineos' },
    ];

    if (event.key === 'Enter') {
        const query = searchInputHeader.value.trim().toLowerCase();
        const closestSystem = findClosestId(query, systems);

        if (closestSystem) {
            document.getElementById(closestSystem.id)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        } else {
            console.warn("Nenhum ID próximo encontrado.");
        }

        event.preventDefault(); // Impede o comportamento padrão do Enter
    }
});

// Configuração do Enter para o campo Branco
searchInputBranco.addEventListener('keydown', function(event) {
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
        { name: 'Linfático', id: 'linfa' },
        { name: 'Sensorial', id: 'sensitivo' },
        { name: 'Reprodutor', id: 'reprodutor' },
        { name: 'Tegumentar', id: 'tegumentar' },
        { name: 'Vasos Sanguíneos', url: 'base.html#sanguineos' },
    ];

    if (event.key === 'Enter') {
        const query = searchInputBranco.value.trim().toLowerCase();
        const closestSystem = findClosestId(query, systems);

        if (closestSystem) {
            document.getElementById(closestSystem.id)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        } else {
            console.warn("Nenhum ID próximo encontrado.");
        }

        event.preventDefault(); // Impede o comportamento padrão do Enter
    }
});