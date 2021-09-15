const inputNumero = document.getElementById('inNumero');
const buttonVerificar = document.getElementById('btnVerificar');
const outputResposta = document.getElementById('outResposta');

function verificarParImpar() {
    let numero = Number(inputNumero.value);

    if ((numero < 0 || numero == '') || isNaN(numero)) {
        alert('Por favor informe um número corretamente.');
        inputNumero.value = '';
        inputNumero.focus();
        return;

    } else if (numero % 2 == 0) {
        outputResposta.textContent = `${numero} é Par.`
    } else {
        outputResposta.textContent = `${numero} é Ímpar.`
    }

}

buttonVerificar.addEventListener('click', verificarParImpar);
