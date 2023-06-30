//CODIGO
var compra = 0;

btnComprar = document.getElementById("card");

btnComprar.addEventListener("click", function() {
    compra++;
    console.log("Valor da compra: " + compra);
  });


//BOTAO VOLTAR
const btnVoltar = document.querySelector('.voltar button');

btnVoltar.addEventListener('click', function() {

  window.location.href = 'meuCartao.html';

});




