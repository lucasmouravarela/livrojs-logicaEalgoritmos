const inputValor = document.getElementById('inValor');
const buttonConfirma = document.getElementById('btnConfirma');
const outputTempo = document.getElementById('outTempo');
const outputTroco = document.getElementById('outTroco');

function exibirResultado() {
    outputTempo.textContent = '';
    outputTroco.textContent = '';

    let valor = Number(inputValor.value);

    if ((valor <= 0 || valor == '') || isNaN(valor)) {
        alert("Informe um valor válido de moedas");
        inputValor.value = '';
        inputValor.focus();
        return;
    }

    if (valor < 1.00) {
        alert("Valor Insuficiente (no mínimo, R$ 1.00)");
        inValor.focus();
        return;
    }

    let tempo;
    let troco;

    if (valor >= 3.00) {
        tempo = 120;
        troco = valor - 3.00;
    } else if (valor >= 1.75) {
        tempo = 60;
        troco = valor - 1.75;
    } else {
        tempo = 30;
        troco = valor - 1.00;
    }

    outputTempo.textContent = `Tempo: ${tempo} min`;
    if (troco > 0) {
        outputTroco.textContent = "Troco R$: " + troco.toFixed(2);
    }
}

buttonConfirma.addEventListener('click', exibirResultado);