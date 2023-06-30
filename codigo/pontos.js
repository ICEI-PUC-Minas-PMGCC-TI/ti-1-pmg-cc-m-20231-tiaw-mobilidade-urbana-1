const inputRetPontos = document.getElementById('ret_pontos');
const exibPontos = document.getElementById('exib_pontos');
const pontosAtuais = document.getElementById('pontos_atuais');
const btnFinalizar = document.getElementById('finalizar');
const inputSuporte = document.getElementById('suporte_i');
const btnSuporte = document.getElementById('suporte_b');



let meusPontos;

const savedPontos = localStorage.getItem('meusPontos');

if (savedPontos) 
{
  meusPontos = parseInt(savedPontos);
} 
else 
{
  meusPontos = 1000;
  localStorage.setItem('meusPontos', meusPontos);
}

exibPontos.textContent = meusPontos;

inputRetPontos.addEventListener('input', function() 
{
  
    const valorSubtrair = parseInt(inputRetPontos.value);

  if (!isNaN(valorSubtrair)) 
  {
 
    const pontosAtuaisValor = meusPontos - valorSubtrair;

    pontosAtuais.textContent = pontosAtuaisValor;
  }
});

btnFinalizar.addEventListener('click', function() 
{
 
  const valorSubtrair = parseInt(inputRetPontos.value);

  if (!isNaN(valorSubtrair) && valorSubtrair <= meusPontos && valorSubtrair % 100 === 0 && valorSubtrair > 0) 
  {

    meusPontos = meusPontos - valorSubtrair;

    exibPontos.textContent = meusPontos;

    pontosAtuais.textContent = '0';

    alert('Operação realizada com sucesso!');

    inputRetPontos.value = '';

    localStorage.setItem('meusPontos', meusPontos);
    
  } 
  else 
  {

    alert('Valor inválido!');

    inputRetPontos.value = '';

    pontosAtuais.textContent = '0';
  }
});

btnSuporte.addEventListener('click', function() 
{

  const mensagem = inputSuporte.value;

  if (mensagem.trim() !== '') {

    alert('Dúvida enviada com sucesso');
  }
});

//BOTAO VOLTAR
const btnVoltar = document.querySelector('.voltar button');

btnVoltar.addEventListener('click', function() {

  window.location.href = 'meuCartao.html';

});
