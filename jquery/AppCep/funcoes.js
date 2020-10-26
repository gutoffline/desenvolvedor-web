$('#botato-busca-cep').click(function(){
    let cep =  $('#cep').val();
    $.ajax({
        url: "https://viacep.com.br/ws/"+ cep +"/json/",
        success: function(dados){
            $('#endereco').html();
            $('#endereco').append(dados.logradouro + ' - ');
            $('#endereco').append(dados.bairro + ' - ');
            $('#endereco').append(dados.localidade + ' / ');
            $('#endereco').append(dados.uf);
        },
        error: function(){
            $('#endereco').html('Endereço não encontrado');
        }
    });
});