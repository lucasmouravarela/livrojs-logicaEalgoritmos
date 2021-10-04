const inNumero = document.getElementById('inNumero');
const outTabuada = document.getElementById('outTabuada');
const btMostrar = document.getElementById('btMostrar');

function mostrarTabuada() {
    let numero = Number(inNumero.value);

    if (numero == 0 || isNaN(numero)) {
        alert('Informe um número válido...');
        inNumero.focus();
        return;
    }

    let resposta = '';

    for (var i = 1; i <= 10; i++) {
        resposta = resposta + numero + " x " + i + " = " + numero * i + "\n";
    }

    outTabuada.textContent = resposta;
}

btMostrar.addEventListener('click', mostrarTabuada);