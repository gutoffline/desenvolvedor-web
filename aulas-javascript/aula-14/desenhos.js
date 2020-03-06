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

tela = document.querySelector("#bandeira3");
desenho = tela.getContext("2d");
desenho.fillStyle = "blue";
desenho.fillRect(0,0,300,50);
desenho.fillStyle = "red";
desenho.fillRect(0,100,300,100);
desenho.fillStyle = "blue";
desenho.fillRect(0,250,300,50);

// tela = document.querySelector("#bandeira4");
// desenho = tela.getContext("2d");
// desenho.fillStyle="red";
// desenho.fillRect(0,0,300,300);
// desenho.fillStyle="white";
// desenho.fillRect(100,50,100,200);
// desenho.fillRect(50,100,200,100);

tela = document.querySelector("#bandeira4");
desenho = tela.getContext("2d");
desenho.fillStyle="green";
desenho.fillRect(0,0,300,300);
desenho.fillStyle="yellow";
desenho.beginPath();
desenho.moveTo(0,150);
desenho.lineTo(150,0);
desenho.lineTo(300,150);
desenho.lineTo(150,300);
desenho.fill();

desenho.fillStyle="blue";
desenho.beginPath();
desenho.arc(150,150,70,0, Math.PI * 2,true);
desenho.fill();


