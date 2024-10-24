var header = document.getElementById("meuElemento");
const btn2 = document.getElementById('btn2');
 

 btn2.addEventListener('click', () => {
    if(header.className === "header"){
        header.classList.add("header2")
        header.classList.remove("header");
        btn2.classList.remove("btn2")
        btn2.classList.add("btn2cima")
     
    }else{
        header.classList.add("header");
        header.classList.remove("header2");
        btn2.classList.remove("btn2cima")
        btn2.classList.add("btn2")   
    }
 console.log(header.className);
 
 });
