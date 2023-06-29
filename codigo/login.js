function realizarLogin() {
  var savedEmail = localStorage.getItem("email");
  var savedPassword = localStorage.getItem("password");

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Verifica se o e-mail e a senha são iguais aos salvos no cadastro
  if (email === savedEmail && password === savedPassword) {
    window.location.href = 'meuCartao.html';
  } else {
    alert("E-mail ou senha incorretos. Por favor, tente novamente.");
  }

  return false; // Impede o envio do formulário
}

//VOLTAR PARA A PAGINA INICIAL

const btnVoltar = document.getElementById("voltar");

btnVoltar.addEventListener('click', function() {
  window.location.href = 'index.html';
});

// Salvar email e senha no localStorage
var email = "teste@gmail.com";
var password = "Teste2023";

localStorage.setItem("email", email);
localStorage.setItem("password", password);
