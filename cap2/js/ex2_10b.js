const inValor15MinDeUso = document.getElementById('inValor15MinDeUso');
const inTempoDeUso = document.getElementById('inTempoDeUso');
const btCalcularValor = document.getElementById('btCalcularValor');
const outValorAPagar = document.getElementById('outValorAPagar');

function calcularValorAPagar() {
    let valor = Number(inValor15MinDeUso.value);
    let tempo = Number(inTempoDeUso.value);
    let tempoTotal = Math.ceil(tempo / 15);

    let precoTotal = (valor * tempoTotal).toFixed(2);

    outValorAPagar.textContent = `Valor a Pagar R$: ${precoTotal}`; 

}

btCalcularValor.addEventListener('click', calcularValorAPagar);