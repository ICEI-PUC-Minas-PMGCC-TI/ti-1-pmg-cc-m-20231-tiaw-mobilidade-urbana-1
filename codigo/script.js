function exibirAlerta(event) {
  event.preventDefault();
  if (document.getElementById("form-avaliacao").checkValidity()) {
    alert("Seu feedback foi registrado no localstorage. Ele será analisado e postado em nosso site em breve. Obrigado!");
  }
  else {
    alert("Informe todos os campos ou verifique se o endereço de email é válido.")
  }

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const feedback = document.getElementById("feedback").value;

  const dados = {
    nome: nome,
    email: email,
    feedback: feedback
  };

  const dadosString = JSON.stringify(dados);

  localStorage.setItem("dadosFormulario", dadosString);
}

document.getElementById("BTenviarFeedback").addEventListener("click", exibirAlerta); 