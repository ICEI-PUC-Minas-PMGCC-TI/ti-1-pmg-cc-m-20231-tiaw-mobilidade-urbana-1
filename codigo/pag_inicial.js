//FEEDBACKS
var avaliacoesBtn = document.querySelector('.avaliacoes button');

avaliacoesBtn.addEventListener('click', function() {

  window.location.href = 'feedback.html';

});

//CALCULADORA
var calculadoraBtn = document.querySelector('.calculadora button');

calculadoraBtn.addEventListener('click', function() {

  window.location.href = 'calculadora.html';

});

//LINHAS
var linhasBtn = document.querySelector('.linhas button');

linhasBtn.addEventListener('click', function() {

  window.location.href = 'linhas.html';

});

//FALE CONOSCO
const btnFaleConosco = document.querySelector('.fale_conosco button');

btnFaleConosco.addEventListener('click', function() {

  const mensagem = prompt('Digite sua mensagem:');

  const email = prompt('Digite seu email:');

  alert(`Mensagem: ${mensagem}\nEmail: ${email}`);
  
});

//QUEM SOMOS
const btnQuemSomos = document.getElementById("quem_somos");

btnQuemSomos.addEventListener('click', function() {

  window.location.href = 'quemSomos.html';

});

//MEU CARTAO
const btnMeuCartao = document.getElementById("meu_cartao");

btnMeuCartao.addEventListener('click', function() {

  window.location.href = 'login.html';

});

//REGISTRE-SE
const btnCadastro = document.getElementById("cadastro");

btnCadastro.addEventListener('click', function() {

  window.location.href = 'cadastro2.html';

});

//LOGIN
const btnLogin = document.getElementById("login");

btnLogin.addEventListener('click', function() {

  window.location.href = 'login.html';

});

//POLITICAS DE PRIVACIDADE
const btnPoliticas = document.getElementById("politicas");

btnPoliticas.addEventListener('click', function() {

  window.location.href = 'politicas.html';

});

//INFORMAÇÕES GERAIS
const btnInfos = document.getElementById("infos");

btnInfos.addEventListener('click', function() {

  window.location.href = 'info.html';

});