function TrocaModelo(modelo){
    if(modelo == "Teixeira"){
        const nomeEstacionamento = "Estacionamento Teixeira";
        const corFundo = "#f3c9dd";

        $("h1").text(nomeEstacionamento);
        $("body").css("background", corFundo);
    }else{
        const nomeEstacionamento = "Estacionamento Jandira";
        const corFundo = "#e8effc";
        
        $("h1").text(nomeEstacionamento);
        $("body").css("background", corFundo);
    }
}


$('#Teixeira').click(function(){
    TrocaModelo("Teixeira");
});

$('#Jandira').click(function(){
    TrocaModelo("Jandira");
});

$("body").ready(function(){
    TrocaModelo("Teixeira");
});


function AdicionarVeiculo(){
    let placa = $("#placa").val();
    let modelo = $("#modelo").val();
    let marca = $("#marca").val();
    let hora = MontaHora();
    let linha = "<tr><td>" + placa + "</td><td>" + modelo + "</td><td>" + marca + "</td>";
    linha += "<td>" + hora + "</td>";
    linha += "<td><img src='imagens/checkout.png' alt='fechamento' class='checkout'></td></tr>";

    $("#veiculos-ativos tbody").append(linha);
}

function MontaHora(){
    let dataCompleta = new Date();
    let hora = dataCompleta.getHours();
    let minutos = dataCompleta.getMinutes();
    return hora + ":" + minutos;
}

function LimparCampos(){
    $("#placa").val("");
    $("#modelo").val("");
    $("#marca").val("");
}

function ValidarCamposVeiculo(){
    let placa = $("#placa").val();
    let modelo = $("#modelo").val();
    let marca = $("#marca").val();
    let erros = "";

    if(placa == ""){
        erros += "<li>A <strong>placa</strong> deve ser preenchida</li>";
        $("#placa").focus();
    }
    
    if(modelo == ""){
        erros += "<li>O <strong>modelo</strong> deve ser preenchido</li>";
        $("#modelo").focus();
    }
    
    if(marca == ""){
        erros += "<li>A <strong>marca</strong> deve ser preenchida</li>";
        $("#marca").focus();
    }
    
    $("#lista-erros").html(erros);

    if(erros == ""){
        return true;
    }else{
        return false;
    }

}

$('#adicionar-veiculo').click(function(){
    if(ValidarCamposVeiculo()){
        AdicionarVeiculo();
        AtualizaPainel();
        LimparCampos();
    }
});


function FazerCheckout(elemento){
    let tdPai = elemento.parentElement;

    let horaEntrada = tdPai.previousSibling.innerHTML;

    alert("TOTAL À PAGAR: \n" + CalcularValorPagar(horaEntrada));
    $(elemento).parent().parent().remove();
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


function ExibirOuOcultarFormularios(){
    $("#formulario-empresa").toggle()
    $("#formulario-individual").toggle();
}

$('#exibir-individual').click(function(e){
    ExibirOuOcultarFormularios("#formulario-individual");
});

$('#exibir-empresa').click(function(e){
    ExibirOuOcultarFormularios("#formulario-empresa");
});

$('#efetuar-reserva').click(function(){
    EfetuarReservaEmpresa();
    AtualizaPainel();
});

function EfetuarReservaEmpresa(){
    let horaEntrada = MontaHora();
    let nomeEmpresa = $("#nome-empresa").val();
    let condicao = $("#quantidade-reservar").val();

    for(let i = 1 ; i <= condicao ; i++){
        let linha = "<tr><td colspan='3'>"+ nomeEmpresa +"</td><td>" + horaEntrada + "</td><td><img src='imagens/checkout.png' alt='fechamento' class='checkout'></td></tr>";
        $("#veiculos-ativos").append(linha);
    }
}


function AtualizaPainel(){
    let linhas = $('#veiculos-ativos tr');
    let vagasTotal = $("#vagas-total").text();
    let vagasUtilizadas = linhas.length - 1;
    let vagasLivres = vagasTotal - vagasUtilizadas;

    $("#vagas-livres").text(vagasLivres);
    $("#vagas-utilizadas").text(vagasUtilizadas);
}

