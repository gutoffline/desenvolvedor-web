/* nessa parte, irá criar 
uma janela com a mensagem abaixo */
//alert("Seja bem vindo!");
//document.write("Aprendendo javascript");
console.log("Recado para o desenvolvedor");

let nome , idade;

nome = "Guto";
idade = "33";

console.log("Nome: " + nome);
console.log("Idade:" + idade);

/* OPERADORES ARITMÉTICOS */
console.log("10+2=" + (10 + 2));
console.log("10-2=" + (10-2));
console.log("10*2=" + (10*2)); // multiplicação
console.log(10/2); // divisão
console.log(10%2); // resto da divisão

/* OPERADORES RELACIONAIS */
console.log(10 > 2); // maior
console.log(10 < 2); // menor
console.log(10 == 2); // igualdade
console.log(10 != 2); // diferente
console.log(10 >= 2); // maior ou igual
console.log(10 <= 2); // menor ou igual

/* OPERADORES LÓGICOS */
console.log( (10 < 2) && (5 == 5) ); // Operador E
console.log( (10 < 2) || (5 == 5) ); // Operador OU
console.log( !(5 == 5) ); // Operador NÃO

let numero1 = prompt("Informe um número");
let numero2 = prompt("Informe outro número");

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

let total = numero1 + numero2;

console.log(total);

console.log(typeof(numero1));
console.log(typeof(numero2));

let nota1 = 7;
let nota2 = 8.5;
let nota3 = 4.5;
let nota4 = 6;
let media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log("A média do João é " + media);

