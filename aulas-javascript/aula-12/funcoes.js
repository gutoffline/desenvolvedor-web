let segundos = 0, minutos = 0;

setInterval(
    function(){
        segundos++;
        Timer();
    }, 
    1000);

function Timer(){
    if(segundos == 60){
        segundos = 0;
        minutos++;
    }
    let exibir = minutos + ":" + segundos;
    document.querySelector('.timer').innerHTML = exibir;
}