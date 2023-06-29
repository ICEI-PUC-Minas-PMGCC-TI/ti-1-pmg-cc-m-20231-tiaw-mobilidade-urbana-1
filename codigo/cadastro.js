function redirecionarPagina() {
    var cardNumber = document.getElementById("cardNumber").value;
    var expirationDate = document.getElementById("expirationDate").value;
    var cvv = document.getElementById("cvv").value;
    var name = document.getElementById("name").value;
  
    // Redireciona o usuário para a página de confirmação com os valores do formulário
    var params = "?cardNumber=" + encodeURIComponent(cardNumber) +
                 "&expirationDate=" + encodeURIComponent(expirationDate) +
                 "&cvv=" + encodeURIComponent(cvv) +
                 "&name=" + encodeURIComponent(name);
  
    window.location.href = "confirmacao.html" + params;
  
    return false; // Impede o envio do formulário
  }
  