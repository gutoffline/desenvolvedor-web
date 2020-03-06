let lousa = document.querySelector("#lousa");
let tela = lousa.getContext("2d");
tela.fillStyle="#0b3f08";
tela.fillRect(0,0,500,500);
tela.fill();

let cor = "white";

lousa.onclick = function(evento){
    let x = evento.pageX - lousa.offsetLeft;
    let y = evento.pageY - lousa.offsetTop;
    tela.fillStyle = cor;
    tela.beginPath();
    tela.arc(x,y,10,0,Math.PI * 2);
    tela.fill();
};

lousa.oncontextmenu = function(evento){
    evento.preventDefault();
    let x = evento.pageX - lousa.offsetLeft;
    let y = evento.pageY - lousa.offsetTop;
    tela.fillStyle = "red";
    tela.beginPath();
    tela.arc(x,y,10,0,Math.PI * 2);
    tela.fill();
};

let btAmarelo = document.querySelector("#amarelo");
btAmarelo.onclick = function(){
    cor = "yellow";
};





let btRosa = document.querySelector("#rosa");
let btBranco = document.querySelector("#branco");
btRosa.onclick = function(){
    cor = "fuchsia";
};

btBranco.onclick = function(){
    cor = "white";
};
