$('#botao-moeda').click(function(){
    let moeda = $('#moeda').val();
    $('#resultado').html('');
    $.ajax({
        url: 'https://economia.awesomeapi.com.br/json/' + moeda,
        success: function(dados){
           $('#resultado').append("Moeda: " + dados[0].name);
           $('#resultado').append("<br>Cotação em R$: " + dados[0].high);
        },
        error: function(){
           $('#resultado').html('Erro');
        }
    });
});