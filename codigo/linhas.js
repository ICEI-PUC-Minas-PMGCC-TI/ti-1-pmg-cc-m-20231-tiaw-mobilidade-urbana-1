document.addEventListener('DOMContentLoaded', function() {
  const favoritadasLista = document.querySelector('.favoritadasLista');
  const listaRotas = document.querySelector('.listaRotas');

  function adicionarEventoFavoritar(btn) {
    btn.addEventListener('click', () => {
      const li = btn.parentNode;
      const linhaTexto = li.innerText;

      if (btn.classList.contains('favoritado')) {
        // Remover da lista de favoritas
        favoritadasLista.removeChild(li);
        btn.classList.remove('favoritado');
        const favoritarBtn = document.createElement('button');
        favoritarBtn.textContent = 'FAVORITAR';
        favoritarBtn.classList.add('favoritarBtn');
        li.insertBefore(favoritarBtn, li.firstChild);
        adicionarEventoFavoritar(favoritarBtn);
        salvarDadosFavoritos();
      } else {
        // Verificar limite de 22 rotas favoritadas
        const favoritadasCount = favoritadasLista.childElementCount;
        if (favoritadasCount >= 22) {
          alert('Você atingiu o limite máximo de rotas favoritadas (22).');
          return;
        }

        // Verificar se a rota já está favoritada
        const favoritadaExistente = Array.from(favoritadasLista.children).find((favoritada) =>
          favoritada.innerText.includes(linhaTexto.replace('FAVORITAR', ''))
        );

        if (favoritadaExistente) {
          alert('Essa rota já está favoritada.');
          return;
        }

        // Adicionar à lista de favoritas
        const favoritadaLi = document.createElement('li');
        const removerFavoritoBtn = document.createElement('button');
        removerFavoritoBtn.textContent = 'REMOVER FAVORITO';
        removerFavoritoBtn.classList.add('removerFavoritoBtn');
        favoritadaLi.appendChild(removerFavoritoBtn);
        favoritadaLi.appendChild(document.createTextNode(linhaTexto.replace('FAVORITAR', '')));
        favoritadasLista.appendChild(favoritadaLi);
        btn.classList.add('favoritado');
        salvarDadosFavoritos();
      }
    });
  }

  const favoritarBtns = document.querySelectorAll('.favoritarBtn');
  favoritarBtns.forEach((btn) => {
    adicionarEventoFavoritar(btn);
  });

  // Event listener para o botão "REMOVER FAVORITO"
  favoritadasLista.addEventListener('click', (event) => {
    if (event.target.classList.contains('removerFavoritoBtn')) {
      const li = event.target.parentNode;
      const btnFavoritar = li.querySelector('.favoritarBtn');
      favoritadasLista.removeChild(li);
      btnFavoritar.classList.remove('favoritado');
      listaRotas.appendChild(li);
      adicionarEventoFavoritar(btnFavoritar);
      salvarDadosFavoritos();
    }
  });

  // Função para salvar os dados de favoritos no armazenamento local
  function salvarDadosFavoritos() {
    const favoritas = favoritadasLista.innerHTML;
    localStorage.setItem('rotasFavoritas', favoritas);
  }

  // Função para carregar os dados de favoritos do armazenamento local
  function carregarDadosFavoritos() {
    const favoritas = localStorage.getItem('rotasFavoritas');
    if (favoritas) {
      favoritadasLista.innerHTML = favoritas;
      const favoritarBtns = document.querySelectorAll('.favoritarBtn');
      favoritarBtns.forEach((btn) => {
        adicionarEventoFavoritar(btn);
      });
    }
  }

  // Carregar os dados de favoritos ao carregar a página
  carregarDadosFavoritos();
});


//////////////////////////////////////////////
function search_linha() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('rota');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="list-item";                 
      }
  }
}

//VOLTAR PARA A PAGINA INICIAL

const btnVoltar = document.getElementById("voltar");

btnVoltar.addEventListener('click', function() {

  window.location.href = 'index.html';

});
