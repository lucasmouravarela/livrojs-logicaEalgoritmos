const inputVelocidadePermitida = document.getElementById('inVelocidadePermitida');
const inputVelocidadeCondutor = document.getElementById('inVelocidadeCondutor');
const buttonVerifica = document.getElementById('btnVerifica');
const outputSituacao = document.getElementById('outSituacao');

function verificaSituacao() {
    let velocidadePermitida = Number(inputVelocidadePermitida.value);
    let velocidadeCondutor = Number(inputVelocidadeCondutor.value);

    if ((velocidadePermitida < 0 || velocidadePermitida == '' || isNaN(velocidadePermitida)) || (velocidadeCondutor < 0 || velocidadeCondutor == '' || isNaN(velocidadeCondutor))) {
        alert('Por favor, informe as velocidades corretamente...')
        inputVelocidadePermitida.focus();
        inputVelocidadePermitida.value = '';
        inputVelocidadeCondutor.value = '';
        return;
    }

    if (velocidadeCondutor <= velocidadePermitida) {
        outputSituacao.textContent = 'Sem multa.';
        outputSituacao.style.color = 'green';
    } else {
        let maisVinte = velocidadePermitida * 1.20;
        if (velocidadeCondutor <= maisVinte) {
            outputSituacao.textContent = 'Multa leve.';
            outputSituacao.style.color = 'blue';
        } else {
            outputSituacao.textContent = 'Multa grave.';
            outputSituacao.style.color = 'red';
        }
    }
}

buttonVerifica.addEventListener('click', verificaSituacao);