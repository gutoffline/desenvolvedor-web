let lanches = ['X-Bacon' , 'X-Salada' , 'X-Tudo'];
let precos =  [13.90, 11.90, 14.90];

function ListarLanches(){
    let lista = "";
    for (let i = 0; i < lanches.length; i++) {
        lista += lanches[i] + " - R$" + precos[i] + "<br>";
    }
    document.querySelector("#cardapio").innerHTML = lista;
}

function AddLanche(){
    let nome = document.querySelector("#nome").value;
    let preco = document.querySelector("#precoUnitario").value;
    lanches.push(nome);
    precos.push(preco);
    ListarLanches();
}

let btAdd = document.querySelector("#btCadastrar");
btAdd.addEventListener("click", (function (){
    AddLanche();
}));

let btListarCardapio = document.querySelector("#btListar");
btListarCardapio.addEventListener("click", (function(){
    ListarLanches();
}));

// btListarCardapio.onclick = (function(){
//     ListarCardapio();
// });
