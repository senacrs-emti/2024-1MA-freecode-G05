const pergunta1_1 = document.getElementById('pergunta1-1');//todos essas const estão chamando os inputs pelo ID
const pergunta1_2 = document.getElementById('pergunta1-2');
const pergunta1_3 = document.getElementById('pergunta1-3');
const pergunta2_1 = document.getElementById('pergunta2-1');
const pergunta2_2 = document.getElementById('pergunta2-2');
const pergunta2_3 = document.getElementById('pergunta2-3');
const pergunta3_1 = document.getElementById('pergunta3-1');
const pergunta3_2 = document.getElementById('pergunta3-2');
const pergunta3_3 = document.getElementById('pergunta3-3');
const pergunta4_1 = document.getElementById('pergunta4-1');
const pergunta4_2 = document.getElementById('pergunta4-2');
const pergunta4_3 = document.getElementById('pergunta4-3');
const pergunta5_1 = document.getElementById('pergunta5-1');
const pergunta5_2 = document.getElementById('pergunta5-2');
const pergunta5_3 = document.getElementById('pergunta5-3');
const pergunta6_1 = document.getElementById('pergunta6-1');
const pergunta6_2 = document.getElementById('pergunta6-2');
const pergunta6_3 = document.getElementById('pergunta6-3');
const pergunta7_1 = document.getElementById('pergunta7-1');
const pergunta7_2 = document.getElementById('pergunta7-2');
const pergunta7_3 = document.getElementById('pergunta7-3');
const pergunta8_1 = document.getElementById('pergunta8-1');
const pergunta8_2 = document.getElementById('pergunta8-2');
const pergunta8_3 = document.getElementById('pergunta8-3');
const pergunta9_1 = document.getElementById('pergunta9-1');
const pergunta9_2 = document.getElementById('pergunta9-2');
const pergunta9_3 = document.getElementById('pergunta9-3');
const pergunta10_1 = document.getElementById('pergunta10-1');
const pergunta10_2 = document.getElementById('pergunta10-1');
const pergunta10_3 = document.getElementById('pergunta10-3');







pergunta1_1.addEventListener('click', () =>{ // adiciona um evento de clique no input
    pergunta1_1.classList.add('certo'); //troca a classe dos inputs
    pergunta1_2.classList.add('errado');
    pergunta1_3.classList.add('errado');
});
//depois disso o processo só se repete pra cada input
//OBS:
//os nomes das variaveis possuem o seguinte formato: "pergunta" + número da pergunta + "_" + numero da alternativa,
//deixe o mesmo padrão de certo e errado pros inputs que fazem parte da mesma pergunta
pergunta1_2.addEventListener('click', () =>{

    pergunta1_1.classList.add('certo');
    pergunta1_2.classList.add('errado');
    pergunta1_3.classList.add('errado');
});

pergunta1_3.addEventListener('click', () =>{

    pergunta1_1.classList.add('certo');
    pergunta1_2.classList.add('errado');
    pergunta1_3.classList.add('errado');
});
pergunta2_1.addEventListener('click', () =>{

    pergunta2_1.classList.add('certo');
    pergunta2_2.classList.add('errado');
    pergunta2_3.classList.add('errado');
});

pergunta2_2.addEventListener('click', () =>{

    pergunta2_1.classList.add('certo');
    pergunta2_2.classList.add('errado');
    pergunta2_3.classList.add('errado');
});

pergunta2_3.addEventListener('click', () =>{

    pergunta2_1.classList.add('certo');
    pergunta2_2.classList.add('errado');
    pergunta2_3.classList.add('errado');
});
pergunta3_1.addEventListener('click', () =>{

    pergunta3_1.classList.add('certo');
    pergunta3_2.classList.add('errado');
    pergunta3_3.classList.add('errado');
});

pergunta3_2.addEventListener('click', () =>{

    pergunta3_1.classList.add('certo');
    pergunta3_2.classList.add('errado');
    pergunta3_3.classList.add('errado');
});

pergunta3_3.addEventListener('click', () =>{

    pergunta3_1.classList.add('certo');
    pergunta3_2.classList.add('errado');
    pergunta3_3.classList.add('errado');
});
pergunta4_1.addEventListener('click', () =>{

    pergunta4_1.classList.add('certo');
    pergunta4_2.classList.add('errado');
    pergunta4_3.classList.add('errado');
});

pergunta4_2.addEventListener('click', () =>{

    pergunta4_1.classList.add('certo');
    pergunta4_2.classList.add('errado');
    pergunta4_3.classList.add('errado');
});

pergunta4_3.addEventListener('click', () =>{

    pergunta4_1.classList.add('certo');
    pergunta4_2.classList.add('errado');
    pergunta4_3.classList.add('errado');
});
pergunta5_1.addEventListener('click', () =>{

    pergunta5_1.classList.add('certo');
    pergunta5_2.classList.add('errado');
    pergunta5_3.classList.add('errado');
});

pergunta5_2.addEventListener('click', () =>{

    pergunta5_1.classList.add('certo');
    pergunta5_2.classList.add('errado');
    pergunta5_3.classList.add('errado');
});

pergunta5_3.addEventListener('click', () =>{

    pergunta5_1.classList.add('certo');
    pergunta5_2.classList.add('errado');
    pergunta5_3.classList.add('errado');
});
pergunta6_1.addEventListener('click', () =>{

    pergunta6_1.classList.add('certo');
    pergunta6_2.classList.add('errado');
    pergunta6_3.classList.add('errado');
});

pergunta6_2.addEventListener('click', () =>{

    pergunta6_1.classList.add('certo');
    pergunta6_2.classList.add('errado');
    pergunta6_3.classList.add('errado');
});

pergunta6_3.addEventListener('click', () =>{

    pergunta6_1.classList.add('certo');
    pergunta6_2.classList.add('errado');
    pergunta6_3.classList.add('errado');
});
pergunta7_1.addEventListener('click', () =>{

    pergunta7_1.classList.add('certo');
    pergunta7_2.classList.add('errado');
    pergunta7_3.classList.add('errado');
});

pergunta7_2.addEventListener('click', () =>{

    pergunta7_1.classList.add('certo');
    pergunta7_2.classList.add('errado');
    pergunta7_3.classList.add('errado');
});

pergunta7_3.addEventListener('click', () =>{

    pergunta7_1.classList.add('certo');
    pergunta7_2.classList.add('errado');
    pergunta7_3.classList.add('errado');
});
pergunta8_1.addEventListener('click', () =>{

    pergunta8_1.classList.add('certo');
    pergunta8_2.classList.add('errado');
    pergunta8_3.classList.add('errado');
});

pergunta8_2.addEventListener('click', () =>{

    pergunta8_1.classList.add('certo');
    pergunta8_2.classList.add('errado');
    pergunta8_3.classList.add('errado');
});

pergunta8_3.addEventListener('click', () =>{

    pergunta8_1.classList.add('certo');
    pergunta8_2.classList.add('errado');
    pergunta8_3.classList.add('errado');
});
pergunta9_1.addEventListener('click', () =>{

    pergunta9_1.classList.add('certo');
    pergunta9_2.classList.add('errado');
    pergunta9_3.classList.add('errado');
});

pergunta9_2.addEventListener('click', () =>{

    pergunta9_1.classList.add('certo');
    pergunta9_2.classList.add('errado');
    pergunta9_3.classList.add('errado');
});

pergunta9_3.addEventListener('click', () =>{

    pergunta9_1.classList.add('certo');
    pergunta9_2.classList.add('errado');
    pergunta9_3.classList.add('errado');
});
pergunta10_1.addEventListener('click', () =>{

    pergunta10_1.classList.add('certo');
    pergunta10_2.classList.add('errado');
    pergunta10_3.classList.add('errado');
});

pergunta10_2.addEventListener('click', () =>{

    pergunta10_1.classList.add('certo');
    pergunta10_2.classList.add('errado');
    pergunta10_3.classList.add('errado');
});

pergunta10_3.addEventListener('click', () =>{

    pergunta10_1.classList.add('certo');
    pergunta10_2.classList.add('errado');
    pergunta10_3.classList.add('errado');
});


