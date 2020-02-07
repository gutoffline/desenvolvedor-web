function VerResposta(questao, respostaCerta){
    let alternativa1 = document.querySelector("#pergunta"+questao+"-resposta"+respostaCerta).checked;
    if(alternativa1 == true){
        document.querySelector(".resposta" + questao).innerHTML = "Certa resposta";
    }else{
        document.querySelector(".resposta" + questao).innerHTML = "Resposta errada";
    }
}
