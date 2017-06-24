(function(){
  'use strict'
  // var botoes = document.querySelectorAll('.opcoesDoCartao-remove');
  var botoes = $('.opcoesDoCartao-remove')

  for(var i=0; i < botoes.length; i++ ){
      // botoes[i].addEventListener("click", removeCartao);
      botoes[i].click(removeCartao)
  }

  function removeCartao(){

      var cartao = document.querySelector('#cartao_'+ this.dataset.ref);
      // var cartao = $('#cartao_'+this.dataset.ref)

      cartao.classList.add('cartao--some2');

      setTimeout(function(){
          cartao.remove();
      }, 400)
  }

  window.removeCartao = removeCartao;

})()
