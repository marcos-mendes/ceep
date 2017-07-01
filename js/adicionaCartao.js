(function(){
  'use strict'
  
$('#novoCartao').on('submit', function(event){

  event.preventDefault();

  var campoTexto = $('.novoCartao-conteudo')
  var conteudo = campoTexto.val().trim().replace(/\n/g,'<br>')


  if(conteudo.trim()){

    ctrlCartao.adicionaCartao(conteudo);

  }

  campoTexto.val('');

})


})()
