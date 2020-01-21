/* JO KEN PO */
let nomeJogador1, nomeJogador2;
let opcaoJogador1, opcaoJogador2;

nomeJogador1 = prompt("Informe o nome do Jogador 1:");
opcaoJogador1 = prompt("Olá " + nomeJogador1 + ", escolha uma das opções: \n 1 - Pedra \n 2 - Papel \n 3 - Tesoura");

nomeJogador2 = prompt("Informe o nome do Jogador 1:");
opcaoJogador2 = prompt("Olá " + nomeJogador2 + ", escolha uma das opções: \n 1 - Pedra \n 2 - Papel \n 3 - Tesoura");

document.write("<br><br><img src='imagens/jogador1.png'> ");
document.write(nomeJogador1);
document.write("  X  ");
document.write(nomeJogador2);
document.write(" <img src='imagens/jogador2.png'><br><br>");

if(opcaoJogador1 == 1){
    document.write("<img src='imagens/pedra.png'>");
}else if(opcaoJogador1 == 2){
    document.write("<img src='imagens/papel.png'>");
}else if(opcaoJogador1 == 3){
    document.write("<img src='imagens/tesoura.png'>");
}

document.write("  X  ");

if(opcaoJogador2 == 1){
    document.write("<img src='imagens/pedra.png'>");
}else if(opcaoJogador2 == 2){
    document.write("<img src='imagens/papel.png'>");
}else if(opcaoJogador2 == 3){
    document.write("<img src='imagens/tesoura.png'>");
}
/*
1-Pedra
2-Papel
3-Tesoura

Tesoura > Papel
Papel > Pedra
Pedra > Tesoura

*/
document.write("<h2>VENCEDOR</h2>");
document.write("<img src='imagens/taca.jpg'><br><br>");
if(opcaoJogador1 == opcaoJogador2){
    document.write("EMPATE");
}else if(opcaoJogador1 == 1 && opcaoJogador2 == 3){
    document.write( nomeJogador1 + " VENCEU");
}else if(opcaoJogador1 == 2 && opcaoJogador2 == 1){
    document.write( nomeJogador1 + " VENCEU");
}else if(opcaoJogador1 == 3 && opcaoJogador2 == 2){
    document.write( nomeJogador1 + " VENCEU");
}else if(opcaoJogador2 == 1 && opcaoJogador1 == 3){
    document.write( nomeJogador2 + " VENCEU");
}else if(opcaoJogador2 == 2 && opcaoJogador1 == 1){
    document.write( nomeJogador2 + " VENCEU");
}else if(opcaoJogador2 == 3 && opcaoJogador1 == 2){
    document.write( nomeJogador2 + " VENCEU");
}
