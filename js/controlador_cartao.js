var ctrlCartao = ( function(){

  var contador = $('.cartao').length

  function adicionaCartao(conteudo)
  {
    contador++

    var buttonOpcoes = $('<button>').addClass('opcoesDoCartao-opcao')
                                    .addClass('opcoesDoCartao-remove')
                                    .attr('data-ref', contador)
                                    .append('Remover')
                                    .click(removeCartao)

    var divOpcoes = $('<div>').addClass('opcoesDoCartao')
                           .append(buttonOpcoes)

    var cartaoConteudo = $('<p>').addClass('cartao-conteudo')
                                .append(conteudo)

    var tipoCartao = decideTipoCartao(conteudo);

    var cartao = $('<div>').attr('id', 'cartao_'+ contador)
                           .addClass('cartao')
                           .addClass(tipoCartao)
                           .append(divOpcoes)
                           .append(cartaoConteudo)
                           .prependTo('.mural')
  }



  function decideTipoCartao(conteudo){
    var quebras = conteudo.split("<br>").length;

    var totalDeLetras = conteudo.replace(/<br>/g," ").length;

    var ultimoMaior = "";

    conteudo.replace(/<br>/g," ")
            .split(" ")
            .forEach(function(palavra){
              if(palavra.length > ultimoMaior.length){
                ultimoMaior = palavra;
              }
            });
    var tamMaior = ultimoMaior.length;

    //no minimo, todo cartão tem o texto pequeno
    var tipoCartao = "cartao--pequeno";

    if (tamMaior < 9 && quebras < 5 && totalDeLetras < 55){
      tipoCartao = "cartao--textoGrande";
    }else if( tamMaior < 12 & quebras < 6 && totalDeLetras < 75){
      tipoCartao = "cartao--textoMedio";
    }
    return tipoCartao;
  }




  function removeCartao()
  {
    var cartao = document.querySelector('#cartao_'+ this.dataset.ref);
    // var cartao = $('#cartao_'+this.dataset.ref)

    cartao.classList.add('cartao--some');

    setTimeout(function(){
        cartao.remove();
    }, 400)

  }

  return{
    adicionaCartao: adicionaCartao,
    removeCartao: removeCartao
    //conteudo:conteudo
  }

})()
