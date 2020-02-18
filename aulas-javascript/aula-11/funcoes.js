//ARRAY
let numeros = [10,20,30,40];
let frutas = ["Maçã" , "Banana" , "Melão" , "Morango" ];

for(let i = 0; i < frutas.length ; i++){
    console.log(frutas[i]);
}


setTimeout(
    function(){
        alert("teste");
    }
    ,5000
);

let listaBanners = ['banner1','banner2','banner3'];
let bannerIndice = 0;

setInterval(
    function(){
        // bannerIndice = (bannerIndice == listaBanners.length - 1) ? 0 : bannerIndice + 1;
        if(bannerIndice == listaBanners.length - 1){
            bannerIndice = 0;
        }else{
            bannerIndice = bannerIndice + 1;
        }
        TrocaBanner(listaBanners[bannerIndice]);
    }, 
    5000
);

function TrocaBanner(banner){
    console.log(banner);
    document.querySelector('#banner1').className="invisivel";
    document.querySelector('#banner2').className="invisivel";
    document.querySelector('#banner3').className="invisivel";
    document.querySelector('#'+ banner).className="visivel";
}


let uf=['SP','MG']
let capitais=['São Paulo' , 'Belo Horizonte'];

function MudaEstado(estado){
    alert('Estado: ' + uf[estado-1] + '\nCapital: ' + capitais[estado-1]);
}




