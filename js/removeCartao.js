(function(){
  'use strict'
  // var botoes = document.querySelectorAll('.opcoesDoCartao-remove');
  var botoes = $('.opcoesDoCartao-remove')

  for(var i=0; i < botoes.length; i++ ){
      // botoes[i].addEventListener("click", removeCartao);
      botoes[i].click(removeCartao)
  }

})()
