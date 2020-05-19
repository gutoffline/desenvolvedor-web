let pokemon = ['p1.png', 'p2.png' , 'p3.png' , 'p4.png'];
let pokemonNome = ['Psyduck', 'Charmander' , 'Pikachu', 'Squirtle'];
let sorteio = Math.floor(Math.random() * pokemon.length);

$('.pokemon-foto').attr('src','imagens/' + pokemon[sorteio]).attr('alt','Pokemon');

function GerarBotoes(){
    for(let i=0 ; i < pokemon.length ; i++){
        $('#botoes').append("<button class='botao-resposta'>" + pokemonNome[i] + "</button>");
    }
}

function Resolver(resposta){
    if(resposta == pokemonNome[sorteio]){
        alert('Parabéns você acertou');
    }else{
        alert('Que pena, você errou');
    }
    $('#pokemon-nome').html(pokemonNome[sorteio]);
    $('.pokemon-foto').css('filter' , 'brightness(1)');
}

function Ajuda(){
    let imagem = "";

    for(let i = 0 ; i < pokemon.length ; i++){
        imagem = "<img src='imagens/" + pokemon[i] + "'>";
        $('#pokemon-ajuda').append("<span>" + imagem + "<br>" + pokemonNome[i] + "</span>");
    }
}

$('.ajuda').click(function(){
    Ajuda();
});

GerarBotoes();

$('.botao-resposta').click(function(elemento){
    Resolver(elemento.target.textContent);
});