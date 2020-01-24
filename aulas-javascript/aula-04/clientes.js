let cliente, resposta;
document.write("<h2>Clientes</h2>");
document.write("<ul>");
resposta = true;

while(resposta){
    cliente = prompt("Nome do cliente");
    document.write("<li>" + cliente + "</li>");
    resposta = confirm("Cadastrar outro cliente?");
}

document.write("</ul>");


let contador = 1;
while(contador <= 10){
    document.write("Número: " + contador);
    
    if(contador == 5){
        document.write(" aqui é a metade");
    }

    document.write("<br>");
    contador++;
}