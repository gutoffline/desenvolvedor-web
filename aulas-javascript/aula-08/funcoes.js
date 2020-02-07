function CadastrarClientes(){
    let nome, telefone, linhaCliente;
    nome = document.querySelector("#nome").value
    telefone = document.querySelector("#telefone").value;

    linhaCliente = "<tr><td>" + nome + "</td><td>" + telefone + "</td></tr>";

    document.querySelector(".lista-clientes").innerHTML += linhaCliente;

    LimparCampos();

    document.querySelector(".mensagem").innerHTML = "<em>Cliente cadastrado com sucesso</em>";
    
}

function LimparCampos(){
    document.querySelector("#nome").value = "";
    document.querySelector("#telefone").value="";
}

