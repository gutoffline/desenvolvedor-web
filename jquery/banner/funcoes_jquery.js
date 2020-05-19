let fotos = ['foto1.png' , 'foto2.png' , 'foto3.png'];
let legendas = ['Homem Aranha' , 'Vingadores' , 'Capitã Marvel'];
let fotoAtual = 0;

function TrocarFotos(foto){
    console.log(foto);
    $('.imagem-banner').attr('src' , 'imagens/'+fotos[foto]).attr('alt',legendas[foto]);
    $('.legenda').html(legendas[foto]);
    $('.banner button').addClass('preto-e-branco');
    $('#btFoto' + (parseInt(foto) + 1)).removeClass('preto-e-branco');
}

TrocarFotos(0);

setInterval(function(){
    fotoAtual++;
    if(fotoAtual >= fotos.length){
        fotoAtual = 0;
    }
    TrocarFotos(fotoAtual);
} , 3000);

$('.botao-foto').click(function(elemento){
    TrocarFotos(elemento.target.parentElement.dataset.foto);
});