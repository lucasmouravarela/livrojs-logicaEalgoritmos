const inputLadoA = document.getElementById('inLadoA');
const inputLadoB = document.getElementById('inLadoB');
const inputLadoC = document.getElementById('inLadoC');
const buttonVerificar = document.getElementById('btnVerificar');
const outputResposta = document.getElementById('outResposta');
const outputTipo = document.getElementById('outTipo');

function verificarLados() {
    ladoA = Number(inputLadoA.value);
    ladoB = Number(inputLadoB.value);
    ladoC = Number(inputLadoC.value);

    if (ladoA == 0 || ladoB == 0 || ladoC == 0 || isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
        alert("Informe lados válidos para o triângulo");
        inLadoA.focus();
        return;
    }

    if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
        outputResposta.textContent = "Lados não podem formar um triângulo";
    } else {
        outputResposta.textContent = "Lados podem formar um triângulo";
        if (ladoA == ladoB && ladoA == ladoC) {
            outputTipo.textContent = "Tipo: Equilátero";
        } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
            outputTipo.textContent = "Tipo: Isósceles";
        } else {
            outputTipo.textContent = "Tipo: Escaleno";
        }
    }
}

buttonVerificar.addEventListener('click', verificarLados);