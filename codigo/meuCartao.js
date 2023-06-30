//VOLTAR PARA A PAGINA INICIAL

const btnVoltar = document.getElementById("voltar");

btnVoltar.addEventListener('click', function() {

  window.location.href = 'index.html';

});

//IR PARA MEUS PONTOS

const btnMeusPontos = document.getElementById("pontos");

btnMeusPontos.addEventListener('click' , function() {

  window.location.href = 'pontos.html';

})

//IR PARA ADICIONAR E RETIRAR SALDO

const btnSaldo = document.getElementById("saldo");

btnSaldo.addEventListener('click' , function() {

    window.location.href = 'saldo.html';

})

//IR PARA TELA EXIBIR MEU CARTÃO

const btnCartao = document.getElementById("cartao");

btnCartao.addEventListener('click' , function() {

    window.location.href = 'cartao.html';

})