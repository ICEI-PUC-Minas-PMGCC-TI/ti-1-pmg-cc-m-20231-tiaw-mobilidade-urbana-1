document.getElementById('calculator').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const distance = parseFloat(document.getElementById('distance').value);
    const bus_fare = parseFloat(document.getElementById('bus_fare').value);
    const uber_rate = parseFloat(document.getElementById('uber_rate').value);
  
    const bus_cost = bus_fare;
    const uber_cost = distance * uber_rate;
  
    let resultText = '';
  
    if (bus_cost < uber_cost) {
      resultText = `Ônibus é mais econômico. Custo: R$${bus_cost.toFixed(2)} vs Uber: R$${uber_cost.toFixed(2)}`;
    } else if (bus_cost > uber_cost) {
      resultText = `Uber é mais econômico. Custo: R$${uber_cost.toFixed(2)} vs Ônibus: R$${bus_cost.toFixed(2)}`;
    } else {
      resultText = `Ambos têm o mesmo custo: R$${bus_cost.toFixed(2)}`;
    }
  
    document.getElementById('result').innerText = resultText;
  });
  
//VOLTAR PARA A PAGINA INICIAL

const btnVoltar = document.getElementById("voltar");

btnVoltar.addEventListener('click', function() {

  window.location.href = 'index.html';

});
