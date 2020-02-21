function LigarDesligar(estado){
    document.querySelector('#lampada').src = (estado == 'desligar') ? 'apagada.png' : 'acesa.png';
}
