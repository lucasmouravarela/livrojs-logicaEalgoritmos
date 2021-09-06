const inNumero = document.getElementById('inNumero');
const btnCalcular = document.getElementById('btnCalcular');
const outResultado = document.getElementById('outResultado');

function calcularRaiz() {
    let numero = Number(inNumero.value);

    if (inNumero == '' || isNaN(numero)) {
        alert('Informa um número válido...');
        inNumero.focus();
        return;
    }

    let raiz = Math.sqrt(numero);

    if (raiz == Math.floor(raiz)) {
        outResultado.textContent = `Raiz: ${raiz};`
    } else {
        outResultado.textContent = `Não há raiz exata para ${numero};`
    }
}

btnCalcular.addEventListener('click', calcularRaiz);