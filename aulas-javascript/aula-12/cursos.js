function Expandir(elemento){
    let classeAtual = document.querySelector(elemento).className;

    if(classeAtual == 'aberto'){
        document.querySelector(elemento).className = "fechado";
    }else{
        document.querySelector(elemento).className = "aberto";
    }

}