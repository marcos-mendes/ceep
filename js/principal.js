
var usuario = "marcossantos@hotmail.com"

 $.getJSON(
    "https://ceep.herokuapp.com/cartoes/carregar?callback=?",
    {usuario:usuario},
    function(res){
      var cartoes = res.cartoes;
      console.log(cartoes.length+"carregados em "+ res.usuario);
      cartoes.forEach(function(cartao){
        ctrlCartao.adicionaCartao(cartao.conteudo);
      });
    }
)


$(document).on("precisaSincronizar",function(){

    var cartoes = [];

    $(".cartao").each(function(){
      var cartao = {};
      cartao.conteudo = $(this).find(".cartao-conteudo").html();
      cartoes.push(cartao);
    });

    //escolha seu nome de usuario aqui
    var mural  = {
      usuario: usuario
      ,cartoes: cartoes
    }

    $.ajax({
        url:"https://ceep.herokuapp.com/cartoes/salvar"
        ,method:"POST"
        ,data:mural
        ,success: function(res){
          console.log(res.quantidade + " cartoes salvos em "+ res.usuario);
        }
        ,error:function(){
          console.log("NÃO FOI POSSIVEL SALVAR O MURAL");
        }
      })

    })

//  })



  $("#sync").click(function(){
    $(document).trigger("precisaSincronizar");
  })





$('#ajuda').click(function(){
  $.getJSON("https://ceep.herokuapp.com/cartoes/instrucoes",function(res){
    console.log(res);
    res.instrucoes.forEach(function(instrucao){
      ctrlCartao.adicionaCartao(instrucao.conteudo,instrucao.cor);
    })
  })
})

  $("#busca").on("input",function(){
    //guarda o valor digitado, removendo espaços extras.
    var busca = $(this).val().trim();

    //console.log(busca);

    if(busca.length){
      $(".cartao").hide().filter(function(){
        return $(this).find(".cartao-conteudo")
                      .text()
                      .match(new RegExp(busca,"i"));
      }).show();
    }else{
      $(".cartao").show();
    }

  })
