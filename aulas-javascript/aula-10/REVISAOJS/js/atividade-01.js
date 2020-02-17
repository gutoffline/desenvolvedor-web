function BemVindo(){
    let nome = prompt("Informe seu nome.");
    alert("Seja bem vindo(a) " + nome);
}

function Multiplicar(){
    let numero1 = prompt("Informe um número");
    let numero2 = prompt("Informe outro número");
    let total = numero1 * numero2;
    alert(numero1 + "x" + numero2 + "=" + total);
}

function Joguinho(){
    let palpite = prompt("Informe um número entre 0 e 10");
    let numeroAleatorio = Math.floor(Math.random() * 10);
    if(palpite == numeroAleatorio){
        alert("Você Ganhou");
    }else{
        alert("Você perdeu");
    }
}