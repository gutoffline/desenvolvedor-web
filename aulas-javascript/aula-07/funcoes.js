function Trocar(){
    let nome, sobrenome;

    nome = document.getElementById("nome").value;
    sobrenome = document.getElementById("sobrenome").value;

    document.getElementById("sobrenome").value = nome;
    document.getElementById("nome").value = sobrenome;
}


function CalcularMedia(){
    let valor1, valor2, valor3, media;
    valor1 = document.getElementById("valor1").value;
    valor2 = document.getElementById("valor2").value;
    valor3 = document.getElementById("valor3").value;

    media = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3)) / 3;

    document.getElementById("resultado").innerHTML = media;
}