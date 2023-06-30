// Cração de constantes para utilizar os valores adquiridos pelo HTML
const saldoElement = document.getElementById("exib_saldo");
const caixaTexto1 = document.getElementById("inserir_saldo");
const caixaTexto2 = document.getElementById("ret_saldo");
const btnUsar1 = document.getElementById("finalizar1");
const btnUsar2 = document.getElementById("finalizar2");
const passagem1 = document.getElementById("passagem_ret");
const passagem2 = document.getElementById("passagem_ins");
const historicoTransacoesElement = document.getElementById("historico_transacoes");
const limparLocalStorage = document.getElementById("limpar");

//Declaração das variáveis, estrutura de dados em JSON e armazenamento no local storage.
let saldo;
try 
{
  saldo = JSON.parse(localStorage.getItem("saldo"));
} 
catch (error) 
{
  saldo = 0;
}

//Quantidade de passagens ja foi declarada nessa etapa pois irei utilizar na hora de "passar" o  cartão para teste.
let passagens = localStorage.getItem("passagens"); 
if (passagens === null) 
{
  passagens = 0;
} 
else 
{
  passagens = JSON.parse(passagens);
}

let historicoTransacoes = [];

let historicoTransacoesData = localStorage.getItem("historicoTransacoes");
if (historicoTransacoesData !== null) 
{
  historicoTransacoes = JSON.parse(historicoTransacoesData);
  // Adicionar transações ao histórico no carregamento da página
  for (let i = 0; i < historicoTransacoes.length; i++) 
  {
    const transacao = historicoTransacoes[i];
    const transacaoElement = document.createElement("li");
    transacaoElement.textContent = `${transacao.tipo}: R$ ${transacao.valor} (${transacao.data})`;
    historicoTransacoesElement.appendChild(transacaoElement);
  }
}

//Configuração do texto quando a página é carregada
saldoElement.textContent = "MEU SALDO: R$" + saldo;
passagem1.textContent = "PASSAGENS: " + passagens;
passagem2.textContent = "PASSAGENS: " + passagens;

//Função que calcula a quantidade de passagem
function calcularPassagens(saldo) 
{
  return Math.floor(saldo / 6);
}

//Função que vai modificar os valores dos espaços de texto no site
function atualizarSaldo() 
{
  saldoElement.textContent = "MEU SALDO: R$ " + saldo;
  passagem1.textContent = "PASSAGENS: " + passagens;
  passagem2.textContent = "PASSAGENS: " + passagens;
  localStorage.setItem("saldo", JSON.stringify(saldo));
  localStorage.setItem("passagens", JSON.stringify(passagens));
}

//Atualiza os valores porém no Local Storage
function atualizarLocalStorage() 
{
  localStorage.setItem("saldo", JSON.stringify(saldo));
  localStorage.setItem("passagens", JSON.stringify(passagens));
  localStorage.setItem("historicoTransacoes", JSON.stringify(historicoTransacoes));
}

//Função para receber o valor do saldo inserido e usá-lo para alterar e atualizar o saldo
function usarValor() 
{
  const valorInserido = parseFloat(caixaTexto1.value);
  if(valorInserido<0)
  {
    alert("VALOR INVÁLIDO!")
    valorInserido = 0;
    saldo = saldo + valorInserido;
  }
  saldo = saldo + valorInserido;
  passagens = calcularPassagens(saldo);
  adicionarTransacao("Inserção", valorInserido);
  atualizarLocalStorage();
  caixaTexto1.value = "";
  atualizarSaldo();
  return saldo;
}

//Função para receber o valor do saldo retirado e usá-lo para alterar e atualizar o saldo
function retirarValor() 
{
  const valorRetirado = parseFloat(caixaTexto2.value);
  saldo = saldo - valorRetirado;
  if (saldo < 0) 
  {
    alert("SALDO INSUFICIENTE!");
    saldo = saldo + valorRetirado;
  } // Se o valor que deseja retirar for maior que o saldo a operação não é realizada
  passagens = calcularPassagens(saldo);
  adicionarTransacao("Retirada", valorRetirado);
  atualizarLocalStorage();
  caixaTexto2.value = "";
  atualizarSaldo();
  return saldo;
}


//Função para adicionar o registro da transação no Local Storage e na página
function adicionarTransacao(tipo, valor) 
{
  const transacao = {
    tipo: tipo,
    valor: valor,
    data: new Date().toLocaleString()
  };
  historicoTransacoes.push(transacao);
  const transacaoElement = document.createElement("li");
  transacaoElement.textContent = `${transacao.tipo}: R$ ${transacao.valor} (${transacao.data})`;
  historicoTransacoesElement.appendChild(transacaoElement);
  // Atualizar o Local Storage com o histórico atualizado
  localStorage.setItem("historicoTransacoes", JSON.stringify(historicoTransacoes));
}

//Criação de um evento para realizar a ação de retirar um valor do saldo mediante ao click no botao
btnUsar1.addEventListener("click", function () 
{
  if (caixaTexto1.value !== "") 
  {
    saldo = usarValor();
  } 
  else 
  {
    alert("Preencha o valor a ser inserido.");
  }
});

//Criação de um evento para realizar a ação de adicionar um valor do saldo mediante ao click no botao
btnUsar2.addEventListener("click", function () 
{
  if (caixaTexto2.value !== "") 
  {
    saldo = retirarValor();
  } 
  else 
  {
    alert("Preencha o valor a ser retirado.");
  }
});

//Funcionalidade opcional para auxiliar o time a testar os possiveis valores a serem inseridos podendo limpar o local storage quando necessário, NÃO ESTARÁ DISPONÍVEL PARA O USUÁRIO NA ENTREGA FINAL!!!
limparLocalStorage.addEventListener("click", function() 
{
  if (confirm("Tem certeza que deseja limpar todas as informações do local storage?")) 
  {
    localStorage.clear();
    saldo = 0;
    passagens = 0;
    historicoTransacoes = [];
    historicoTransacoesElement.innerHTML = "";
    atualizarSaldo(saldo);
    alert("As informações foram limpas do local storage.");
  }
});
 
//BOTAO VOLTAR
const btnVoltar = document.querySelector('.voltar button');

btnVoltar.addEventListener('click', function() {

  window.location.href = 'meuCartao.html';

});

//REGISTRAR FORMAS DE PAGAMENTO
const btnPagamento = document.getElementById("registro");

btnPagamento.addEventListener('click', function() {

  window.location.href = 'cadastro.html';

});
