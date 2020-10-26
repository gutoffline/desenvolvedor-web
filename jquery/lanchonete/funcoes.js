$(document).ready(function(){
    $('#botao-cardapio').avgrund({
        template: $('.cardapio-conteudo'),
        showClose: true,
        showCloseText: 'fechar'
    });

    $('#slider').nivoSlider();

    $('.galeria').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });

    $('.abas').champ();

    $('#cardapio-completo').click(function(){
        
        $.ajax({
            url: 'cardapio.txt',
            beforeSend: function(){
                $('#cardapio-completo-lista').html('<img src="img/carregando.gif">');
                alert("Vou enviar");
            },
            success: function(conteudo){
                console.dir(conteudo);
                $('#cardapio-completo-lista').html(conteudo);
            },
            error: function(e){
                console.dir(e);
                alert('Deu erro');
                $('#cardapio-completo-lista').html(e.responseText);
            },
            complete: function(){
                alert('acabou');
            }
        });
        
    });

    $('#cardapio-online').click(function(){
        
        $.ajax({
            url: 'http://cozinhapp.sergiolopes.org/produtos',
            beforeSend: function(){
                $('#cardapio-completo-lista').html('<img src="img/carregando.gif">');
                alert("Vou enviar");
            },
            success: function(conteudo){
                console.dir(conteudo);
                $('#cardapio-completo-lista').html("");
                for (let i = 0; i < conteudo.length; i++) {
                    $('#cardapio-completo-lista').append(conteudo[i].nome + " - ");
                    $('#cardapio-completo-lista').append("<strong>" + conteudo[i].preco + "</strong><br>");
                    $('#cardapio-completo-lista').append(conteudo[i].descricao + "<br>");
                    $('#cardapio-completo-lista').append("<img src='" + conteudo[i].foto + "' style='width: 100px'>");
                    $('#cardapio-completo-lista').append("<hr>");
                }
                
            },
            error: function(e){
                console.dir(e);
                alert('Deu erro');
                $('#cardapio-completo-lista').html(e.responseText);
            },
            complete: function(){
                alert('acabou');
            }
        });
    });

    $('#botao-busca-cep').click(function(){
        let cep = $('#cep').val();
        $('#endereco-completo').html('');
        $.ajax({
            url: 'https://viacep.com.br/ws/'+cep+'/json',
            success: function(conteudo){
                console.dir(conteudo);
                $('#endereco-completo img').remove();
                $('#endereco-completo').append('<span class="rua">Rua: ' + conteudo.logradouro + "</span>");
                $('#endereco-completo').append('<br><span class="bairro">Bairro: ' + conteudo.bairro + "</span>");
                $('#endereco-completo').append('<br><span class="cidade">Cidade: ' + conteudo.localidade + "</span>");
                $('#endereco-completo').append('<br><span class="uf">Estado: ' + conteudo.uf + "</span>");
            },
            beforeSend: function(){
                $('#endereco-completo').html('<img src="img/carregando.gif">');
            },
            error: function(){
                $('#endereco-completo').html('Endereço não encontrado');
            }
        });
    });


    $('#imprimir').click(function(){
        let doc = new jsPDF();
        doc.text($('.rua').html(),10,10);
        doc.text($('.bairro').html(),10,20);
        doc.text($('.cidade').html(),10,30);
        doc.text($('.uf').html(),10,40);
        doc.save('destino.pdf');
    });

});