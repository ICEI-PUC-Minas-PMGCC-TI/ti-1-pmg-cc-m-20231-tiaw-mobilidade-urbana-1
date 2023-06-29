function redirecionarPagina() {
  var name = document.getElementById("name").value;
  var address = document.getElementById("address").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var password = document.getElementById("password").value;

  // Verifica se o telefone possui 11 dígitos, incluindo o DDD
  if (phone.length !== 14) {
    alert("O telefone deve ter 11 dígitos, incluindo o DDD. Por favor, preencha o campo corretamente.");
    return false;
  }

  // Verifica se a senha é forte o suficiente
  if (password.length < 8 || !/[A-Z]/.test(password) || !/\d/.test(password)) {
    alert("A senha não é forte o suficiente. Por favor, inclua pelo menos 8 caracteres, uma letra maiúscula e um número.");
    return false;
  }

  // Redireciona o usuário para a página de login com os valores do formulário
  var params = "?name=" + encodeURIComponent(name) +
               "&address=" + encodeURIComponent(address) +
               "&email=" + encodeURIComponent(email) +
               "&phone=" + encodeURIComponent(phone) +
               "&password=" + encodeURIComponent(password);

  window.location.href = "login.html" + params;

  return false; // Impede o envio do formulário
}

//VOLTAR PARA A PAGINA INICIAL

const btnVoltar = document.getElementById("voltar");

btnVoltar.addEventListener('click', function() {

  window.location.href = 'index.html';

});
