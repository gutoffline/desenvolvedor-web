function VerResposta1(){
    // ALTERNATIVA 1
    let alternativa1 = document.querySelector("#pergunta1-resposta1").checked;
    if(alternativa1 == true){
        document.querySelector(".resposta1").innerHTML = "Certa resposta";
    }else{
        document.querySelector(".resposta1").innerHTML = "Resposta errada";
    }
}




function VerResposta(questao, respostaCerta){
    // ALTERNATIVA 1
    let alternativa1 = document.querySelector("#pergunta"+questao+"-resposta"+respostaCerta).checked;
    if(alternativa1 == true){
        document.querySelector(".resposta" + questao).innerHTML = "Certa resposta";
    }else{
        document.querySelector(".resposta" + questao).innerHTML = "Resposta errada";
    }
}
