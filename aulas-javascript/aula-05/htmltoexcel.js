$(document).ready(function(){
    $(".export-btn").click(function(){  
      $("#TabelaClientes").tableHTMLExport({
       type:'csv',
       filename:'CadastroDeClientes.csv',
     });
   });
 });