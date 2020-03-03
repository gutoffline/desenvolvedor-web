let tela = document.querySelector("#bandeira");
let desenho = tela.getContext("2d");
desenho.fillStyle = "green";
desenho.fillRect(0 , 0 , 100, 300);
desenho.fillStyle = "red";
desenho.fillRect(200,0,100,300);

tela = document.querySelector("#bandeira2");
desenho = tela.getContext("2d");
desenho.fillStyle = "red";
desenho.fillRect(0,0,300,100);
desenho.fillStyle = "blue";
desenho.fillRect(0,200,300,100);