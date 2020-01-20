let nome, idade, email;

nome = prompt("Qual seu nome?");
idade = prompt("Qual sua idade?");
email = prompt("Qual seu e-mail?");

if(idade >= 18){
    document.write("Seu nome é: <strong>" + nome + "</strong>");
    document.write("<br>Sua idade é: <em>" + idade + "</em>");
    document.write("<br>Seu e-mail é: " + email);

}else if(idade < 7){
    document.write("Sai daqui");
    
}else{
    document.write("Você precisa de um responsável.");
}