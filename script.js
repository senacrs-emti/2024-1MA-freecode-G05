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
    const suggestionsDiv = document.getElementById("suggestions-branco");
    const suggestionsBox = document.getElementById("suggestions-header");

    if (header.classList.contains("header")) {
        // Troca para o estado header2
        header.classList.replace("header", "header2");
        btn2.classList.replace("btn2", "btn2cima");
        branco.classList.replace("headerdefundo2", "headerdefundo");

        // Esconde a div de sugestões
        if (suggestionsDiv) {
            suggestionsDiv.style.display = "none"; // Esconde a div
        }
        if (suggestionsBox) {
            suggestionsBox.style.display = "none"; // Esconde a div
        }
    } else {
        // Volta ao estado header
        header.classList.replace("header2", "header");
        btn2.classList.replace("btn2cima", "btn2");
        branco.classList.replace("headerdefundo", "headerdefundo2");

        // Verifica se a div 'suggestions-branco' está visível
        if (suggestionsBox) {
            // Se estiver oculta, mostra a div
            if (suggestionsBox.style.display === "none" || suggestionsBox.style.display === "") {
                suggestionsBox.style.display = "block"; // Mostra a div
            } else {
                suggestionsBox.remove();
                //suggestionsBox.style.display = "none"; // Caso contrário, esconde
            }

        }
        // Verifica se a div 'suggestions-branco' está visível
        if (suggestionsDiv) {
            // Se estiver oculta, mostra a div
            if (suggestionsDiv.style.display === "none" || suggestionsDiv.style.display === "") {
                suggestionsDiv.style.display = "block"; // Mostra a div
            } else {
                suggestionsDiv.remove();
            }

        }

    }
    // NOVO CÓDIGO: Limpa o conteúdo do campo de pesquisa (search-input-header)
    const searchInputHeader = document.getElementById("search-input-header");
    if (searchInputHeader) {
        searchInputHeader.value = ""; // Limpa o conteúdo do campo de pesquisa
    }
    // NOVO CÓDIGO: Limpa o conteúdo do campo de pesquisa (search-input-header)
    const searchInputBranco = document.getElementById("search-input-branco");
    if (searchInputBranco) {
        searchInputBranco.value = ""; // Limpa o conteúdo do campo de pesquisa
    }
    console.log(header.className); // Verifica qual classe está ativa no header
});

// Adiciona evento para esconder a caixa de sugestões quando pressionar a tecla Enter
document.addEventListener("keydown", (event) => {
    const suggestionsDiv = document.getElementById("suggestions-branco");

    if (event.key === 'Enter' || event.keyCode === 13) {
        if (suggestionsDiv) {
            suggestionsDiv.remove(); // Esconde a div
        }

        // Limpa o conteúdo do campo de pesquisa (search-input-branco)
        const searchInput = document.getElementById("search-input-branco");
        if (searchInput) {
            searchInput.value = ""; // Limpa o conteúdo do campo de pesquisa
        }
    }
});

// Adiciona evento para esconder a caixa de sugestões quando pressionar a tecla Enter
document.addEventListener("keydown", (event) => {
    const suggestionsBox = document.getElementById("suggestions-header");

    if (event.key === 'Enter' || event.keyCode === 13) {
        if (suggestionsBox) {
            suggestionsBox.style.display = "none"; // Esconde a div
        }

        // Limpa o conteúdo do campo de pesquisa (search-input-header)
        const searchInput = document.getElementById("search-input-header");
        if (searchInput) {
            searchInput.value = ""; // Limpa o conteúdo do campo de pesquisa
        }
    }
});

// Função para detectar quando a tecla ; é pressionada
document.addEventListener("keydown", function (event) {
    if (event.key === "/") {
        btn2.click(); // Aciona o clique no botão btn2 quando a tecla Alt for pressionada
    }
});
// Função para exibir sugestões no header
function showSuggestionsHeader() {
    const query = searchInputHeader.value.toLowerCase();
    suggestionsBoxHeader.innerHTML = '';
    const systems = [
        { name: 'Cardiovascular', url: 'index.html#cardiovascular' },
        { name: 'Respiratório', url: 'index.html#respiratorio' },
        { name: 'Nervoso', url: 'index.html#nervoso' },
        { name: 'Digestório', url: 'index.html#digestivo' },
        { name: 'Endócrino', url: 'index.html#endocrino' },
        { name: 'Excretor', url: 'index.html#excretor' },
        { name: 'Urinário', url: 'index.html#urinario' },
        { name: 'Esquelético', url: 'index.html#esqueletico' },
        { name: 'Muscular', url: 'index.html#muscular' },
        { name: 'Imunológico', url: 'index.html#imunologico' },
        { name: 'Linfático', url: 'index.html#linfa' },
        { name: 'Sensorial', url: 'index.html#sensitivo' },
        { name: 'Reprodutor', url: 'index.html#reprodutor' },
        { name: 'Tegumentar', url: 'index.html#tegumentar' },
        { name: 'Vasos Sanguíneos', url: 'base.html#sanguineos' },
        { name: 'Artérias', url: 'base.html#arterias' },
        { name: 'Veias', url: 'base.html#veias' },
        { name: 'Vasos Capilares', url: 'base.html#vasoscapilares' },
        { name: 'Coração', url: 'base.html#coracao' },
        { name: 'Pulsação', url: 'base.html#pulsacao' },
        { name: 'Porção Condutora', url: 'respiratorio.html#porcaocondutora' },
        { name: 'Porção Respiratória', url: 'respiratorio.html#porcaorespi' },
        { name: 'Alvéolos Pulmonares', url: 'respiratorio.html#aoveolos' },
        { name: 'Bronquiolos', url: 'respiratorio.html#bronquiolos' },
        { name: 'Brônquios', url: 'respiratorio.html#bronquios' },
        { name: 'Respiração', url: 'respiratorio.html#respiracao' },
        { name: 'Boca', url: 'Digestório.html#boca' },
        { name: 'Faringe', url: 'Digestório.html#faringe' },
        { name: 'Esôfago', url: 'Digestório.html#esofago' },
        { name: 'Estômago', url: 'Digestório.html#estomago' },
        { name: 'Intestino Delgado', url: 'Digestório.html#intestinodelg' },
        { name: 'Intestino Grosso', url: 'Digestório.html#intestinogrosso' },
        { name: 'Sistema Central Nervoso', url: 'nervoso.html#nervosocentral' },
        { name: 'Encéfalo', url: 'nervoso.html#encefalo' },
        { name: 'Partes do Cérebro', url: 'nervoso.html#partesdocerebro' },
        { name: 'Tronco Encefálico', url: 'nervoso.html#troncoencefalico' },
        { name: 'Medula Espinhal', url: 'nervoso.html#medulaespinhal' },
        { name: 'Sistema Nervoso Periférico', url: 'nervoso.html#sistemanervosoperiferico' },
        { name: 'Hipófise', url: 'endocrino.html#hipofise' },
        { name: 'Tireóide', url: 'endocrino.html#tireoide' },
        { name: 'Paratireóides', url: 'endocrino.html#paratireoide' },
        { name: 'Timo', url: 'endocrino.html#timo' },
        { name: 'Suprarrenais', url: 'endocrino.html#suprarrenais' },
        { name: 'Pâncreas', url: 'endocrino.html#pancreas' },
        { name: 'Glandulas Sexuais', url: 'endocrino.html#glandulassexuais' },
        { name: 'Rins', url: 'Excretor.html#rins' },
        { name: 'Néfrons', url: 'Excretor.html#nefrons' },
        { name: 'Ureter', url: 'Excretor.html#ureter' },
        { name: 'Bexiga Urinária', url: 'Excretor.html#bexigaurinaria' },
        { name: 'Uretra', url: 'Excretor.html#uretra' },
        { name: 'Urina', url: 'urinario.html#urina' },
        { name: 'Excretor vs Urinário', url: 'urinario.html#excretorvsurinario' },
        { name: 'Esqueleto Axial', url: 'esqueletico.html#esqueletoaxial' },
        { name: 'Crânio e Ossos da Face', url: 'esqueletico.html#cranioeossosdaface' },
        { name: 'Coluna Vertebral', url: 'esqueletico.html#colunavertebral' },
        { name: 'Tórax', url: 'esqueletico.html#torax' },
        { name: 'Esqueleto Apendicular', url: 'esqueletico.html#esqueletoapendicular' },
        { name: 'Cintura Escapular', url: 'esqueletico.html#cinturaescapular' },
        { name: 'Membros Superiores', url: 'esqueletico.html#membrossuperiores' },
        { name: 'Cintura Pélvica', url: 'esqueletico.html#cinturapelvica' },
        { name: 'Membros Inferiores', url: 'esqueletico.html#membrosinferiores' },
        { name: 'Ossificação e Remodelação', url: 'esqueletico.html#Ossificacaoeremodelacaoossea' },
        { name: 'Fraturas', url: 'esqueletico.html#fraturas' },
        { name: 'Músculos da Cabeça', url: 'muscular.html#musculosdacabeca' },
        { name: 'Músculos do Tórax', url: 'muscular.html#musculosdotorax' },
        { name: 'Músculos dos Membros Inferiores', url: 'muscular.html#musculosdosmembrosinferiores' },
        { name: 'Músculos dos Membros Superiores', url: 'muscular.html#musculosdosmembrossuperiores' },
        { name: 'Músculo Liso', url: 'muscular.html#musculoliso' },
        { name: 'Músculo Estriado Cardíaco', url: 'muscular.html#musculoestriadocardiaco' },
        { name: 'Músculo Estriado Esquelético', url: 'muscular.html#musculoestriadoesqueletico' },
        { name: 'Imunidade Adiquirida', url: 'imunologico.html#imunidadeadiquirida' },
        { name: 'Células e Órgaos Imunológicos', url: 'imunologico.html#celulaseorgaos' },
        { name: 'Leucócitos', url: 'imunologico.html#leucocitos' },
        { name: 'Linfócitos', url: 'imunologico.html#linfocito' },
        { name: 'Macrófagos', url: 'imunologico.html#macrofagos' },
        { name: 'Linfa', url: 'linfatico.html#linfa' },
        { name: 'Edema', url: 'linfatico.html#edema' },
        { name: 'Orgãos Linfaticos', url: 'linfatico.html#orgãoslinfaticos' },
        { name: 'Linfonodos', url: 'linfatico.html#linfonodos' },
        { name: 'Linfas', url: 'linfatico.html#linfas' },
        { name: 'Filariose Linfatica', url: 'linfatico.html#filarioselinfatica' },
        { name: 'Visão', url: 'sensorial.html#visao' },
        { name: 'Audição', url: 'sensorial.html#audicao' },
        { name: 'Tato', url: 'sensorial.html#tato' },
        { name: 'Paladar', url: 'sensorial.html#paladar' },
        { name: 'Olfato', url: 'sensorial.html#olfato' },
        { name: 'Sexto Sentido', url: 'sensorial.html#sextosentido' },
        { name: 'Glândulas Sexuais Reprodutoras', url: 'reprodutor.html#glandulassexuais' },
        { name: 'Hormônios Sexuais', url: 'reprodutor.html#hormoniossexuais' },
        { name: 'Orgãos Sexuais', url: 'reprodutor.html#orgaossexuais' },
        { name: 'Células Reprodutoras', url: 'reprodutor.html#celulasreprodutoras' },
        { name: 'Gestação', url: 'reprodutor.html#gestacao' },
        { name: 'Menstruação', url: 'reprodutor.html#menstruacao' },
        { name: 'Epiderme', url: 'tegumentar.html#epiderme' },
        { name: 'Derme', url: 'tegumentar.html#derme' },
        { name: 'Hipoderme', url: 'tegumentar.html#hipoderme' },
        { name: 'Glândulas Sebáceas', url: 'tegumentar.html#glandulassebaceas' },
        { name: 'Glândulas Sudorípadas', url: 'tegumentar.html#glandulassudoripadas' },
        { name: 'Game', url: 'undertale.html' },
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


// Função para exibir sugestões com URLs
function showSuggestionsBranco() {
    const query = searchInputBranco.value.toLowerCase();
    suggestionsBoxBranco.innerHTML = '';
    currentIndexBranco = -1; // Reset do índice sempre que as sugestões mudarem

    const systems = [
        { name: 'Cardiovascular', url: 'index.html#cardiovascular' },
        { name: 'Respiratório', url: 'index.html#respiratorio' },
        { name: 'Nervoso', url: 'index.html#nervoso' },
        { name: 'Digestório', url: 'index.html#digestivo' },
        { name: 'Endócrino', url: 'index.html#endocrino' },
        { name: 'Excretor', url: 'index.html#excretor' },
        { name: 'Urinário', url: 'index.html#urinario' },
        { name: 'Esquelético', url: 'index.html#esqueletico' },
        { name: 'Muscular', url: 'index.html#muscular' },
        { name: 'Imunológico', url: 'index.html#imunologico' },
        { name: 'Linfático', url: 'index.html#linfa' },
        { name: 'Sensorial', url: 'index.html#sensitivo' },
        { name: 'Reprodutor', url: 'index.html#reprodutor' },
        { name: 'Tegumentar', url: 'index.html#tegumentar' },
        { name: 'Vasos Sanguíneos', url: 'base.html#sanguineos' },
        { name: 'Artérias', url: 'base.html#arterias' },
        { name: 'Veias', url: 'base.html#veias' },
        { name: 'Vasos Capilares', url: 'base.html#vasoscapilares' },
        { name: 'Coração', url: 'base.html#coracao' },
        { name: 'Pulsação', url: 'base.html#pulsacao' },
        { name: 'Porção Condutora', url: 'respiratorio.html#porcaocondutora' },
        { name: 'Porção Respiratória', url: 'respiratorio.html#porcaorespi' },
        { name: 'Alvéolos Pulmonares', url: 'respiratorio.html#aoveolos' },
        { name: 'Bronquiolos', url: 'respiratorio.html#bronquiolos' },
        { name: 'Brônquios', url: 'respiratorio.html#bronquios' },
        { name: 'Respiração', url: 'respiratorio.html#respiracao' },
        { name: 'Boca', url: 'Digestório.html#boca' },
        { name: 'Faringe', url: 'Digestório.html#faringe' },
        { name: 'Esôfago', url: 'Digestório.html#esofago' },
        { name: 'Estômago', url: 'Digestório.html#estomago' },
        { name: 'Intestino Delgado', url: 'Digestório.html#intestinodelg' },
        { name: 'Intestino Grosso', url: 'Digestório.html#intestinogrosso' },
        { name: 'Sistema Central Nervoso', url: 'nervoso.html#nervosocentral' },
        { name: 'Encéfalo', url: 'nervoso.html#encefalo' },
        { name: 'Partes do Cérebro', url: 'nervoso.html#partesdocerebro' },
        { name: 'Tronco Encefálico', url: 'nervoso.html#troncoencefalico' },
        { name: 'Medula Espinhal', url: 'nervoso.html#medulaespinhal' },
        { name: 'Sistema Nervoso Periférico', url: 'nervoso.html#sistemanervosoperiferico' },
        { name: 'Hipófise', url: 'endocrino.html#hipofise' },
        { name: 'Tireóide', url: 'endocrino.html#tireoide' },
        { name: 'Paratireóides', url: 'endocrino.html#paratireoide' },
        { name: 'Timo', url: 'endocrino.html#timo' },
        { name: 'Suprarrenais', url: 'endocrino.html#suprarrenais' },
        { name: 'Pâncreas', url: 'endocrino.html#pancreas' },
        { name: 'Glandulas Sexuais', url: 'endocrino.html#glandulassexuais' },
        { name: 'Rins', url: 'Excretor.html#rins' },
        { name: 'Néfrons', url: 'Excretor.html#nefrons' },
        { name: 'Ureter', url: 'Excretor.html#ureter' },
        { name: 'Bexiga Urinária', url: 'Excretor.html#bexigaurinaria' },
        { name: 'Uretra', url: 'Excretor.html#uretra' },
        { name: 'Urina', url: 'urinario.html#urina' },
        { name: 'Excretor vs Urinário', url: 'urinario.html#excretorvsurinario' },
        { name: 'Esqueleto Axial', url: 'esqueletico.html#esqueletoaxial' },
        { name: 'Crânio e Ossos da Face', url: 'esqueletico.html#cranioeossosdaface' },
        { name: 'Coluna Vertebral', url: 'esqueletico.html#colunavertebral' },
        { name: 'Tórax', url: 'esqueletico.html#torax' },
        { name: 'Esqueleto Apendicular', url: 'esqueletico.html#esqueletoapendicular' },
        { name: 'Cintura Escapular', url: 'esqueletico.html#cinturaescapular' },
        { name: 'Membros Superiores', url: 'esqueletico.html#membrossuperiores' },
        { name: 'Cintura Pélvica', url: 'esqueletico.html#cinturapelvica' },
        { name: 'Membros Inferiores', url: 'esqueletico.html#membrosinferiores' },
        { name: 'Ossificação e Remodelação', url: 'esqueletico.html#Ossificacaoeremodelacaoossea' },
        { name: 'Fraturas', url: 'esqueletico.html#fraturas' },
        { name: 'Músculos da Cabeça', url: 'muscular.html#musculosdacabeca' },
        { name: 'Músculos do Tórax', url: 'muscular.html#musculosdotorax' },
        { name: 'Músculos dos Membros Inferiores', url: 'muscular.html#musculosdosmembrosinferiores' },
        { name: 'Músculos dos Membros Superiores', url: 'muscular.html#musculosdosmembrossuperiores' },
        { name: 'Músculo Liso', url: 'muscular.html#musculoliso' },
        { name: 'Músculo Estriado Cardíaco', url: 'muscular.html#musculoestriadocardiaco' },
        { name: 'Músculo Estriado Esquelético', url: 'muscular.html#musculoestriadoesqueletico' },
        { name: 'Imunidade Adiquirida', url: 'imunologico.html#imunidadeadiquirida' },
        { name: 'Células e Órgaos Imunológicos', url: 'imunologico.html#celulaseorgaos' },
        { name: 'Leucócitos', url: 'imunologico.html#leucocitos' },
        { name: 'Linfócitos', url: 'imunologico.html#linfocito' },
        { name: 'Macrófagos', url: 'imunologico.html#macrofagos' },
        { name: 'Linfa', url: 'linfatico.html#linfa' },
        { name: 'Edema', url: 'linfatico.html#edema' },
        { name: 'Orgãos Linfaticos', url: 'linfatico.html#orgãoslinfaticos' },
        { name: 'Linfonodos', url: 'linfatico.html#linfonodos' },
        { name: 'Linfas', url: 'linfatico.html#linfas' },
        { name: 'Filariose Linfatica', url: 'linfatico.html#filarioselinfatica' },
        { name: 'Visão', url: 'sensorial.html#visao' },
        { name: 'Audição', url: 'sensorial.html#audicao' },
        { name: 'Tato', url: 'sensorial.html#tato' },
        { name: 'Paladar', url: 'sensorial.html#paladar' },
        { name: 'Olfato', url: 'sensorial.html#olfato' },
        { name: 'Sexto Sentido', url: 'sensorial.html#sextosentido' },
        { name: 'Glândulas Sexuais Reprodutoras', url: 'reprodutor.html#glandulassexuais' },
        { name: 'Hormônios Sexuais', url: 'reprodutor.html#hormoniossexuais' },
        { name: 'Orgãos Sexuais', url: 'reprodutor.html#orgaossexuais' },
        { name: 'Células Reprodutoras', url: 'reprodutor.html#celulasreprodutoras' },
        { name: 'Gestação', url: 'reprodutor.html#gestacao' },
        { name: 'Menstruação', url: 'reprodutor.html#menstruacao' },
        { name: 'Epiderme', url: 'tegumentar.html#epiderme' },
        { name: 'Derme', url: 'tegumentar.html#derme' },
        { name: 'Hipoderme', url: 'tegumentar.html#hipoderme' },
        { name: 'Glândulas Sebáceas', url: 'tegumentar.html#glandulassebaceas' },
        { name: 'Glândulas Sudorípadas', url: 'tegumentar.html#glandulassudoripadas' },
        { name: 'Game', url: 'undertale.html' },
    ];

    if (query.length > 0) {
        const filteredSystems = systems.filter(system => system.name.toLowerCase().includes(query));

        filteredSystems.forEach((system, index) => {
            const suggestionItem = document.createElement('div');
            suggestionItem.innerText = system.name;
            suggestionItem.classList.add('suggestion-item');

            // Adiciona evento de clique para redirecionar
            suggestionItem.addEventListener('click', () => {
                window.location.href = system.url;
            });

            suggestionsBoxBranco.appendChild(suggestionItem);
        });

        suggestionsBoxBranco.style.display = 'block';
    } else {
        suggestionsBoxBranco.style.display = 'none';
    }
}

// Função para navegar pelas sugestões usando o teclado
function navigateSuggestionsBranco(event) {
    const suggestions = suggestionsBoxBranco.querySelectorAll('.suggestion-item');

    if (suggestions.length > 0) {
        if (event.key === 'ArrowDown') {
            currentIndexBranco = (currentIndexBranco + 1) % suggestions.length; // Avança para o próximo
            updateHighlightBranco(suggestions);
        } else if (event.key === 'ArrowUp') {
            currentIndexBranco = (currentIndexBranco - 1 + suggestions.length) % suggestions.length; // Volta para o anterior
            updateHighlightBranco(suggestions);
        } else if (event.key === 'Enter') {
            if (currentIndexBranco >= 0 && currentIndexBranco < suggestions.length) {
                const selectedItem = suggestions[currentIndexBranco];
                const selectedText = selectedItem.innerText;

                // Busca a URL correspondente
                const systems = [
                    { name: 'Cardiovascular', url: 'index.html#cardiovascular' },
                    { name: 'Respiratório', url: 'index.html#respiratorio' },
                    { name: 'Nervoso', url: 'index.html#nervoso' },
                    { name: 'Digestório', url: 'index.html#digestivo' },
                    { name: 'Endócrino', url: 'index.html#endocrino' },
                    { name: 'Excretor', url: 'index.html#excretor' },
                    { name: 'Urinário', url: 'index.html#urinario' },
                    { name: 'Esquelético', url: 'index.html#esqueletico' },
                    { name: 'Muscular', url: 'index.html#muscular' },
                    { name: 'Imunológico', url: 'index.html#imunologico' },
                    { name: 'Linfático', url: 'index.html#linfa' },
                    { name: 'Sensorial', url: 'index.html#sensitivo' },
                    { name: 'Reprodutor', url: 'index.html#reprodutor' },
                    { name: 'Tegumentar', url: 'index.html#tegumentar' },
                    { name: 'Vasos Sanguíneos', url: 'base.html#sanguineos' },
                    { name: 'Artérias', url: 'base.html#arterias' },
                    { name: 'Veias', url: 'base.html#veias' },
                    { name: 'Vasos Capilares', url: 'base.html#vasoscapilares' },
                    { name: 'Coração', url: 'base.html#coracao' },
                    { name: 'Pulsação', url: 'base.html#pulsacao' },
                    { name: 'Porção Condutora', url: 'respiratorio.html#porcaocondutora' },
                    { name: 'Porção Respiratória', url: 'respiratorio.html#porcaorespi' },
                    { name: 'Alvéolos Pulmonares', url: 'respiratorio.html#aoveolos' },
                    { name: 'Bronquiolos', url: 'respiratorio.html#bronquiolos' },
                    { name: 'Brônquios', url: 'respiratorio.html#bronquios' },
                    { name: 'Respiração', url: 'respiratorio.html#respiracao' },
                    { name: 'Boca', url: 'Digestório.html#boca' },
                    { name: 'Faringe', url: 'Digestório.html#faringe' },
                    { name: 'Esôfago', url: 'Digestório.html#esofago' },
                    { name: 'Estômago', url: 'Digestório.html#estomago' },
                    { name: 'Intestino Delgado', url: 'Digestório.html#intestinodelg' },
                    { name: 'Intestino Grosso', url: 'Digestório.html#intestinogrosso' },
                    { name: 'Sistema Central Nervoso', url: 'nervoso.html#nervosocentral' },
                    { name: 'Encéfalo', url: 'nervoso.html#encefalo' },
                    { name: 'Partes do Cérebro', url: 'nervoso.html#partesdocerebro' },
                    { name: 'Tronco Encefálico', url: 'nervoso.html#troncoencefalico' },
                    { name: 'Medula Espinhal', url: 'nervoso.html#medulaespinhal' },
                    { name: 'Sistema Nervoso Periférico', url: 'nervoso.html#sistemanervosoperiferico' },
                    { name: 'Hipófise', url: 'endocrino.html#hipofise' },
                    { name: 'Tireóide', url: 'endocrino.html#tireoide' },
                    { name: 'Paratireóides', url: 'endocrino.html#paratireoide' },
                    { name: 'Timo', url: 'endocrino.html#timo' },
                    { name: 'Suprarrenais', url: 'endocrino.html#suprarrenais' },
                    { name: 'Pâncreas', url: 'endocrino.html#pancreas' },
                    { name: 'Glandulas Sexuais', url: 'endocrino.html#glandulassexuais' },
                    { name: 'Rins', url: 'Excretor.html#rins' },
                    { name: 'Néfrons', url: 'Excretor.html#nefrons' },
                    { name: 'Ureter', url: 'Excretor.html#ureter' },
                    { name: 'Bexiga Urinária', url: 'Excretor.html#bexigaurinaria' },
                    { name: 'Uretra', url: 'Excretor.html#uretra' },
                    { name: 'Urina', url: 'urinario.html#urina' },
                    { name: 'Excretor vs Urinário', url: 'urinario.html#excretorvsurinario' },
                    { name: 'Esqueleto Axial', url: 'esqueletico.html#esqueletoaxial' },
                    { name: 'Crânio e Ossos da Face', url: 'esqueletico.html#cranioeossosdaface' },
                    { name: 'Coluna Vertebral', url: 'esqueletico.html#colunavertebral' },
                    { name: 'Tórax', url: 'esqueletico.html#torax' },
                    { name: 'Esqueleto Apendicular', url: 'esqueletico.html#esqueletoapendicular' },
                    { name: 'Cintura Escapular', url: 'esqueletico.html#cinturaescapular' },
                    { name: 'Membros Superiores', url: 'esqueletico.html#membrossuperiores' },
                    { name: 'Cintura Pélvica', url: 'esqueletico.html#cinturapelvica' },
                    { name: 'Membros Inferiores', url: 'esqueletico.html#membrosinferiores' },
                    { name: 'Ossificação e Remodelação', url: 'esqueletico.html#Ossificacaoeremodelacaoossea' },
                    { name: 'Fraturas', url: 'esqueletico.html#fraturas' },
                    { name: 'Músculos da Cabeça', url: 'muscular.html#musculosdacabeca' },
                    { name: 'Músculos do Tórax', url: 'muscular.html#musculosdotorax' },
                    { name: 'Músculos dos Membros Inferiores', url: 'muscular.html#musculosdosmembrosinferiores' },
                    { name: 'Músculos dos Membros Superiores', url: 'muscular.html#musculosdosmembrossuperiores' },
                    { name: 'Músculo Liso', url: 'muscular.html#musculoliso' },
                    { name: 'Músculo Estriado Cardíaco', url: 'muscular.html#musculoestriadocardiaco' },
                    { name: 'Músculo Estriado Esquelético', url: 'muscular.html#musculoestriadoesqueletico' },
                    { name: 'Imunidade Adiquirida', url: 'imunologico.html#imunidadeadiquirida' },
                    { name: 'Células e Órgaos Imunológicos', url: 'imunologico.html#celulaseorgaos' },
                    { name: 'Leucócitos', url: 'imunologico.html#leucocitos' },
                    { name: 'Linfócitos', url: 'imunologico.html#linfocito' },
                    { name: 'Macrófagos', url: 'imunologico.html#macrofagos' },
                    { name: 'Linfa', url: 'linfatico.html#linfa' },
                    { name: 'Edema', url: 'linfatico.html#edema' },
                    { name: 'Orgãos Linfaticos', url: 'linfatico.html#orgãoslinfaticos' },
                    { name: 'Linfonodos', url: 'linfatico.html#linfonodos' },
                    { name: 'Linfas', url: 'linfatico.html#linfas' },
                    { name: 'Filariose Linfatica', url: 'linfatico.html#filarioselinfatica' },
                    { name: 'Visão', url: 'sensorial.html#visao' },
                    { name: 'Audição', url: 'sensorial.html#audicao' },
                    { name: 'Tato', url: 'sensorial.html#tato' },
                    { name: 'Paladar', url: 'sensorial.html#paladar' },
                    { name: 'Olfato', url: 'sensorial.html#olfato' },
                    { name: 'Sexto Sentido', url: 'sensorial.html#sextosentido' },
                    { name: 'Glândulas Sexuais Reprodutoras', url: 'reprodutor.html#glandulassexuais' },
                    { name: 'Hormônios Sexuais', url: 'reprodutor.html#hormoniossexuais' },
                    { name: 'Orgãos Sexuais', url: 'reprodutor.html#orgaossexuais' },
                    { name: 'Células Reprodutoras', url: 'reprodutor.html#celulasreprodutoras' },
                    { name: 'Gestação', url: 'reprodutor.html#gestacao' },
                    { name: 'Menstruação', url: 'reprodutor.html#menstruacao' },
                    { name: 'Epiderme', url: 'tegumentar.html#epiderme' },
                    { name: 'Derme', url: 'tegumentar.html#derme' },
                    { name: 'Hipoderme', url: 'tegumentar.html#hipoderme' },
                    { name: 'Glândulas Sebáceas', url: 'tegumentar.html#glandulassebaceas' },
                    { name: 'Glândulas Sudorípadas', url: 'tegumentar.html#glandulassudoripadas' },
                    { name: 'Game', url: 'undertale.html' },
                ];
                const selectedSystem = systems.find(system => system.name === selectedText);

                if (selectedSystem) {
                    window.location.href = selectedSystem.url;
                }
            }
        }
    }
}

// Função para atualizar o destaque nas sugestões
function updateHighlightBranco(suggestions) {
    suggestions.forEach((item, index) => {
        if (index === currentIndexBranco) {
            item.classList.add('highlight');
        } else {
            item.classList.remove('highlight');
        }
    });
}

// Adiciona eventos de teclado ao input
searchInputBranco.addEventListener('keydown', navigateSuggestionsBranco);




/**--------------------------------------------------------------------------------------------- */
// Função para navegar pelas sugestões usando o teclado
function navigateSuggestionsHeader(event) {
    const suggestions = suggestionsBoxHeader.querySelectorAll('.suggestion-link');

    if (suggestions.length > 0) {
        if (event.key === 'ArrowDown') {
            currentIndexHeader = (currentIndexHeader + 1) % suggestions.length; // Avança para o próximo
            updateHighlightHeader(suggestions);
        } else if (event.key === 'ArrowUp') {
            currentIndexHeader = (currentIndexHeader - 1 + suggestions.length) % suggestions.length; // Volta para o anterior
            updateHighlightHeader(suggestions);
        } else if (event.key === 'Enter') {
            if (currentIndexHeader >= 0 && currentIndexHeader < suggestions.length) {
                const selectedItem = suggestions[currentIndexHeader];
                const selectedText = selectedItem.innerText;

                // Busca a URL correspondente
                const systems = [
                    { name: 'Cardiovascular', url: 'index.html#cardiovascular' },
                    { name: 'Respiratório', url: 'index.html#respiratorio' },
                    { name: 'Nervoso', url: 'index.html#nervoso' },
                    { name: 'Digestório', url: 'index.html#digestivo' },
                    { name: 'Endócrino', url: 'index.html#endocrino' },
                    { name: 'Excretor', url: 'index.html#excretor' },
                    { name: 'Urinário', url: 'index.html#urinario' },
                    { name: 'Esquelético', url: 'index.html#esqueletico' },
                    { name: 'Muscular', url: 'index.html#muscular' },
                    { name: 'Imunológico', url: 'index.html#imunologico' },
                    { name: 'Linfático', url: 'index.html#linfa' },
                    { name: 'Sensorial', url: 'index.html#sensitivo' },
                    { name: 'Reprodutor', url: 'index.html#reprodutor' },
                    { name: 'Tegumentar', url: 'index.html#tegumentar' },
                    { name: 'Vasos Sanguíneos', url: 'base.html#sanguineos' },
                    { name: 'Artérias', url: 'base.html#arterias' },
                    { name: 'Veias', url: 'base.html#veias' },
                    { name: 'Vasos Capilares', url: 'base.html#vasoscapilares' },
                    { name: 'Coração', url: 'base.html#coracao' },
                    { name: 'Pulsação', url: 'base.html#pulsacao' },
                    { name: 'Porção Condutora', url: 'respiratorio.html#porcaocondutora' },
                    { name: 'Porção Respiratória', url: 'respiratorio.html#porcaorespi' },
                    { name: 'Alvéolos Pulmonares', url: 'respiratorio.html#aoveolos' },
                    { name: 'Bronquiolos', url: 'respiratorio.html#bronquiolos' },
                    { name: 'Brônquios', url: 'respiratorio.html#bronquios' },
                    { name: 'Respiração', url: 'respiratorio.html#respiracao' },
                    { name: 'Boca', url: 'Digestório.html#boca' },
                    { name: 'Faringe', url: 'Digestório.html#faringe' },
                    { name: 'Esôfago', url: 'Digestório.html#esofago' },
                    { name: 'Estômago', url: 'Digestório.html#estomago' },
                    { name: 'Intestino Delgado', url: 'Digestório.html#intestinodelg' },
                    { name: 'Intestino Grosso', url: 'Digestório.html#intestinogrosso' },
                    { name: 'Sistema Central Nervoso', url: 'nervoso.html#nervosocentral' },
                    { name: 'Encéfalo', url: 'nervoso.html#encefalo' },
                    { name: 'Partes do Cérebro', url: 'nervoso.html#partesdocerebro' },
                    { name: 'Tronco Encefálico', url: 'nervoso.html#troncoencefalico' },
                    { name: 'Medula Espinhal', url: 'nervoso.html#medulaespinhal' },
                    { name: 'Sistema Nervoso Periférico', url: 'nervoso.html#sistemanervosoperiferico' },
                    { name: 'Hipófise', url: 'endocrino.html#hipofise' },
                    { name: 'Tireóide', url: 'endocrino.html#tireoide' },
                    { name: 'Paratireóides', url: 'endocrino.html#paratireoide' },
                    { name: 'Timo', url: 'endocrino.html#timo' },
                    { name: 'Suprarrenais', url: 'endocrino.html#suprarrenais' },
                    { name: 'Pâncreas', url: 'endocrino.html#pancreas' },
                    { name: 'Glandulas Sexuais', url: 'endocrino.html#glandulassexuais' },
                    { name: 'Rins', url: 'Excretor.html#rins' },
                    { name: 'Néfrons', url: 'Excretor.html#nefrons' },
                    { name: 'Ureter', url: 'Excretor.html#ureter' },
                    { name: 'Bexiga Urinária', url: 'Excretor.html#bexigaurinaria' },
                    { name: 'Uretra', url: 'Excretor.html#uretra' },
                    { name: 'Urina', url: 'urinario.html#urina' },
                    { name: 'Excretor vs Urinário', url: 'urinario.html#excretorvsurinario' },
                    { name: 'Esqueleto Axial', url: 'esqueletico.html#esqueletoaxial' },
                    { name: 'Crânio e Ossos da Face', url: 'esqueletico.html#cranioeossosdaface' },
                    { name: 'Coluna Vertebral', url: 'esqueletico.html#colunavertebral' },
                    { name: 'Tórax', url: 'esqueletico.html#torax' },
                    { name: 'Esqueleto Apendicular', url: 'esqueletico.html#esqueletoapendicular' },
                    { name: 'Cintura Escapular', url: 'esqueletico.html#cinturaescapular' },
                    { name: 'Membros Superiores', url: 'esqueletico.html#membrossuperiores' },
                    { name: 'Cintura Pélvica', url: 'esqueletico.html#cinturapelvica' },
                    { name: 'Membros Inferiores', url: 'esqueletico.html#membrosinferiores' },
                    { name: 'Ossificação e Remodelação', url: 'esqueletico.html#Ossificacaoeremodelacaoossea' },
                    { name: 'Fraturas', url: 'esqueletico.html#fraturas' },
                    { name: 'Músculos da Cabeça', url: 'muscular.html#musculosdacabeca' },
                    { name: 'Músculos do Tórax', url: 'muscular.html#musculosdotorax' },
                    { name: 'Músculos dos Membros Inferiores', url: 'muscular.html#musculosdosmembrosinferiores' },
                    { name: 'Músculos dos Membros Superiores', url: 'muscular.html#musculosdosmembrossuperiores' },
                    { name: 'Músculo Liso', url: 'muscular.html#musculoliso' },
                    { name: 'Músculo Estriado Cardíaco', url: 'muscular.html#musculoestriadocardiaco' },
                    { name: 'Músculo Estriado Esquelético', url: 'muscular.html#musculoestriadoesqueletico' },
                    { name: 'Imunidade Adiquirida', url: 'imunologico.html#imunidadeadiquirida' },
                    { name: 'Células e Órgaos Imunológicos', url: 'imunologico.html#celulaseorgaos' },
                    { name: 'Leucócitos', url: 'imunologico.html#leucocitos' },
                    { name: 'Linfócitos', url: 'imunologico.html#linfocito' },
                    { name: 'Macrófagos', url: 'imunologico.html#macrofagos' },
                    { name: 'Linfa', url: 'linfatico.html#linfa' },
                    { name: 'Edema', url: 'linfatico.html#edema' },
                    { name: 'Orgãos Linfaticos', url: 'linfatico.html#orgãoslinfaticos' },
                    { name: 'Linfonodos', url: 'linfatico.html#linfonodos' },
                    { name: 'Linfas', url: 'linfatico.html#linfas' },
                    { name: 'Filariose Linfatica', url: 'linfatico.html#filarioselinfatica' },
                    { name: 'Visão', url: 'sensorial.html#visao' },
                    { name: 'Audição', url: 'sensorial.html#audicao' },
                    { name: 'Tato', url: 'sensorial.html#tato' },
                    { name: 'Paladar', url: 'sensorial.html#paladar' },
                    { name: 'Olfato', url: 'sensorial.html#olfato' },
                    { name: 'Sexto Sentido', url: 'sensorial.html#sextosentido' },
                    { name: 'Glândulas Sexuais Reprodutoras', url: 'reprodutor.html#glandulassexuais' },
                    { name: 'Hormônios Sexuais', url: 'reprodutor.html#hormoniossexuais' },
                    { name: 'Orgãos Sexuais', url: 'reprodutor.html#orgaossexuais' },
                    { name: 'Células Reprodutoras', url: 'reprodutor.html#celulasreprodutoras' },
                    { name: 'Gestação', url: 'reprodutor.html#gestacao' },
                    { name: 'Menstruação', url: 'reprodutor.html#menstruacao' },
                    { name: 'Epiderme', url: 'tegumentar.html#epiderme' },
                    { name: 'Derme', url: 'tegumentar.html#derme' },
                    { name: 'Hipoderme', url: 'tegumentar.html#hipoderme' },
                    { name: 'Glândulas Sebáceas', url: 'tegumentar.html#glandulassebaceas' },
                    { name: 'Glândulas Sudorípadas', url: 'tegumentar.html#glandulassudoripadas' },
                    { name: 'Game', url: 'undertale.html' },
                ];
                const selectedSystem = systems.find(system => system.name === selectedText);

                if (selectedSystem) {
                    window.location.href = selectedSystem.url;
                }
            }
        }
    }
}

// Função para atualizar o destaque nas sugestões
function updateHighlightHeader(suggestions) {
    suggestions.forEach((item, index) => {
        if (index === currentIndexHeader) {
            item.classList.add('highlight');
        } else {
            item.classList.remove('highlight');
        }
    });
}

// Adiciona eventos de teclado ao input
searchInputHeader.addEventListener('keydown', navigateSuggestionsHeader);

/**-------------------------------------------------- */
// Função para atualizar a posição da barra de rolagem para suggestionsBoxHeader
function updateScrollPositionHeader() {
    const highlightedItem = suggestionsBoxHeader.querySelector('.highlight');

    if (highlightedItem) {
        const containerRect = suggestionsBoxHeader.getBoundingClientRect();
        const itemRect = highlightedItem.getBoundingClientRect();

        // Verifica se o item está fora da visualização
        if (itemRect.top < containerRect.top) {
            suggestionsBoxHeader.scrollTop -= (containerRect.top - itemRect.top); // Rola para cima
        } else if (itemRect.bottom > containerRect.bottom) {
            suggestionsBoxHeader.scrollTop += (itemRect.bottom - containerRect.bottom); // Rola para baixo
        }
    }
}

// Função para atualizar a posição da barra de rolagem para suggestionsBoxBranco
function updateScrollPositionBranco() {
    const highlightedItem = suggestionsBoxBranco.querySelector('.highlight');

    if (highlightedItem) {
        const containerRect = suggestionsBoxBranco.getBoundingClientRect();
        const itemRect = highlightedItem.getBoundingClientRect();

        // Verifica se o item está fora da visualização
        if (itemRect.top < containerRect.top) {
            suggestionsBoxBranco.scrollTop -= (containerRect.top - itemRect.top); // Rola para cima
        } else if (itemRect.bottom > containerRect.bottom) {
            suggestionsBoxBranco.scrollTop += (itemRect.bottom - containerRect.bottom); // Rola para baixo
        }
    }
}

// A cada alteração de destaque, chamamos as funções para ajustar a barra de rolagem
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        // Atualiza o scroll das duas listas
        updateScrollPositionHeader();
        updateScrollPositionBranco();
    }
});


// Função para limpar o campo de entrada e as sugestões
function clearSearchAndSuggestions(inputId, suggestionsBoxId) {
    document.getElementById(inputId).value = '';
    document.getElementById(suggestionsBoxId).innerHTML = '';
}

// Event listener para clicar em um link dentro das sugestões
document.addEventListener('click', function (e) {
    // Verifica se o clique foi em um link dentro das caixas de sugestões
    const suggestionsBoxHeader = document.getElementById('suggestions-header');
    const suggestionsBoxBranco = document.getElementById('suggestions-branco');

    if (e.target.tagName === 'A') {
        if (suggestionsBoxHeader.contains(e.target)) {
            clearSearchAndSuggestions('search-input-header', 'suggestions-header');
        } else if (suggestionsBoxBranco.contains(e.target)) {
            clearSearchAndSuggestions('search-input-branco', 'suggestions-branco');
        }
    }
});

// Event listener para pressionar "Enter" em um item destacado
document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        // Identifica se estamos no header ou na barra branca
        const activeElement = document.activeElement;
        const suggestionsBoxHeader = document.getElementById('suggestions-header');
        const suggestionsBoxBranco = document.getElementById('suggestions-branco');

        let highlightedItem;

        if (activeElement.id === 'search-input-header') {
            highlightedItem = suggestionsBoxHeader.querySelector('.highlight');
            if (highlightedItem) {
                window.location.href = highlightedItem.querySelector('a').href; // Navega para o link destacado
                clearSearchAndSuggestions('search-input-header', 'suggestions-header');
            }
        } else if (activeElement.id === 'search-input-branco') {
            highlightedItem = suggestionsBoxBranco.querySelector('.highlight');
            if (highlightedItem) {
                window.location.href = highlightedItem.querySelector('a').href; // Navega para o link destacado
                clearSearchAndSuggestions('search-input-branco', 'suggestions-branco');
            }
        }
    }
});

/**-------------------------------------------------------------- */
// Função para esconder as sugestões e limpar o campo de entrada
function hideSuggestions(inputField, suggestionsBox) {
    inputField.value = ''; // Limpa o texto digitado
    suggestionsBox.style.display = 'none'; // Esconde a caixa de sugestões
    currentIndexHeader = -1; // Reseta o índice
}

// Gerar as sugestões e adicionar eventos
suggestions.forEach((system) => {
    const link = document.createElement('a');
    link.href = system.url || '#'; // Define o link ou placeholder
    link.textContent = system.name;
    link.classList.add('suggestion-item');

    // Adiciona evento para clique no link
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Evita comportamento padrão
        hideSuggestions(searchInputHeader, suggestionsBoxHeader); // Limpa e esconde sugestões
        window.location.href = link.href; // Redireciona para o link
    });

    suggestionsBoxHeader.appendChild(link);
});

// Evento para interação ao pressionar Enter
searchInputHeader.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && currentIndexHeader !== -1) {
        e.preventDefault(); // Evita comportamento padrão do Enter
        const highlightedItem = suggestionsBoxHeader.querySelector('.highlight');
        if (highlightedItem) {
            highlightedItem.click(); // Simula o clique no item selecionado
        }
    }
});

// Evento de entrada para mostrar/atualizar sugestões
searchInputHeader.addEventListener('input', () => {
    const query = searchInputHeader.value.toLowerCase();
    const filteredSuggestions = suggestions.filter((system) =>
        system.name.toLowerCase().includes(query)
    );

    // Atualiza a caixa de sugestões
    suggestionsBoxHeader.innerHTML = ''; // Limpa sugestões antigas
    if (filteredSuggestions.length > 0) {
        filteredSuggestions.forEach((system) => {
            const link = document.createElement('a');
            link.href = system.url || '#';
            link.textContent = system.name;
            link.classList.add('suggestion-item');

            // Adiciona evento de clique para cada link
            link.addEventListener('click', (event) => {
                event.preventDefault();
                hideSuggestions(searchInputHeader, suggestionsBoxHeader);
                window.location.href = link.href;
            });

            suggestionsBoxHeader.appendChild(link);
        });
        suggestionsBoxHeader.style.display = 'block'; // Mostra a caixa
    } else {
        suggestionsBoxHeader.style.display = 'none'; // Esconde se vazio
    }
});

// Evento para ocultar ao clicar fora
document.addEventListener('click', (e) => {
    if (!suggestionsBoxHeader.contains(e.target) && e.target !== searchInputHeader) {
        hideSuggestions(searchInputHeader, suggestionsBoxHeader);
    }
});
/**----------------------------------------------- */