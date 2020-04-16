function TrocaModelo(modelo){
    if(modelo == "Teixeira"){
        const nomeEstacionamento = "Estacionamento Teixeira";
        const corFundo = "#f3c9dd";

        document.querySelector("h1").innerText = nomeEstacionamento ;
        document.querySelector("body").style.backgroundColor = corFundo;
    }else{
        const nomeEstacionamento = "Estacionamento Jandira";
        const corFundo = "#e8effc";
        
        document.querySelector("h1").innerText = nomeEstacionamento ;
        document.querySelector("body").style.backgroundColor = corFundo;
    }
}


botaoTeixeira = document.querySelector("#Teixeira");
botaoJandira = document.querySelector("#Jandira");

botaoTeixeira.onclick=(function(){
    TrocaModelo("Teixeira");
});

botaoJandira.onclick=(function(){
    TrocaModelo("Jandira");
});

document.querySelector("body").onload=(function(){
    TrocaModelo("Teixeira");
});



function AdicionarVeiculo(){
    let placa = document.querySelector("#placa").value;
    let modelo = document.querySelector("#modelo").value;
    let marca = document.querySelector("#marca").value;
    let hora = MontaHora();
    let linha = "<tr><td>" + placa + "</td><td>" + modelo + "</td><td>" + marca + "</td>";
    linha += "<td>" + hora + "</td>";
    linha += "<td><img src='imagens/checkout.png' alt='fechamento' class='checkout'></td></tr>";

    document.querySelector("#veiculos-ativos tbody").innerHTML += linha;
}

function MontaHora(){
    let dataCompleta = new Date();
    let hora = dataCompleta.getHours();
    let minutos = dataCompleta.getMinutes();
    return hora + ":" + minutos;
}

function LimparCampos(){
    document.querySelector("#placa").value = "";
    document.querySelector("#modelo").value = "";
    document.querySelector("#marca").value = "";
}

function ValidarCamposVeiculo(){
    let placa = document.querySelector("#placa").value;
    let modelo = document.querySelector("#modelo").value;
    let marca = document.querySelector("#marca").value;
    let erros = "";

    if(placa == ""){
        erros += "<li>A <strong>placa</strong> deve ser preenchida</li>";
        document.querySelector("#placa").focus();
    }
    
    if(modelo == ""){
        erros += "<li>O <strong>modelo</strong> deve ser preenchido</li>";
        document.querySelector("#modelo").focus();
    }
    
    if(marca == ""){
        erros += "<li>A <strong>marca</strong> deve ser preenchida</li>";
        document.querySelector("#marca").focus();
    }
    
    document.querySelector("#lista-erros").innerHTML = erros;

    if(erros == ""){
        return true;
    }else{
        return false;
    }

}

botaoAdicionarVeiculo = document.querySelector("#adicionar-veiculo");
botaoAdicionarVeiculo.onclick = (function(){
    if(ValidarCamposVeiculo()){
        AdicionarVeiculo();
        LimparCampos();
    }
});


function FazerCheckout(elemento){
    let tdPai = elemento.parentElement;

    let horaEntrada = tdPai.previousSibling.innerHTML;

    alert("TOTAL À PAGAR: \n" + CalcularValorPagar(horaEntrada));

    let trPai = tdPai.parentElement;
    trPai.remove();
}

function CalcularValorPagar(horaEntrada){
    let hora = horaEntrada.split(":");
    
    horaEntrada = hora[0];

    let dataCompleta = new Date();
    horaSaida = dataCompleta.getHours();
    horaSaida += 1;

    let totalPagar = (horaSaida - horaEntrada) * 3;
    return "R$ " + totalPagar;
}


document.addEventListener('click',function(e){
    if(e.target && e.target.className== 'checkout'){
        FazerCheckout(e.target);
    }
});
