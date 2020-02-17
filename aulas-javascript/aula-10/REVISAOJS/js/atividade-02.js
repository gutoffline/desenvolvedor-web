let precoUnitario, quantidade, totalProduto, totalGeral = 0;

function CalcularPreco(){
    precoUnitario = document.querySelector('#preco').value;
    quantidade = document.querySelector('#quantidade').value;
    totalProduto = precoUnitario * quantidade;
    document.querySelector('#total-produto').innerHTML = totalProduto;
}

function AdicionarAoCarrinho(){
    let produto = document.querySelector('#produto').value;
    let linha = "<tr>";
    linha += "<td>" + produto + "</td>";
    linha += "<td>" + quantidade + "</td>";
    linha += "<td>" + precoUnitario + "</td>";
    linha += "<td>" + totalProduto + "</td>"
    linha += "</tr>";
    document.querySelector("#lista-produtos").innerHTML +=linha;
    AtualizarTotal();
    LimparCampos();
}

function AtualizarTotal(){
    totalGeral += totalProduto;
    document.querySelector("#total-geral").innerHTML = totalGeral;
}

function LimparCampos(){
    document.querySelector("#produto").value = "";
    document.querySelector("#preco").value = "";
    document.querySelector("#quantidade").value = "";
    document.querySelector("#total-produto").innerHTML = "";
}


function BemVindo(){
    let dataCompleta = new Date();
    console.log(dataCompleta);
    console.log(dataCompleta.getDay());
    console.log(dataCompleta.getDate());
    console.log(dataCompleta.getMonth());
    console.log(dataCompleta.getFullYear());
    console.log(dataCompleta.getHours());
    console.log(dataCompleta.getMinutes());
    console.log(dataCompleta.toLocaleTimeString());
    let hora = dataCompleta.getHours();
    if(hora < 12){
        document.querySelector("#mensagem").innerHTML = "Bom dia";
    }else if(hora < 19){
        document.querySelector("#mensagem").innerHTML = "Boa tarde";
    }else{
        document.querySelector("#mensagem").innerHTML = "Boa noite";
    }
}