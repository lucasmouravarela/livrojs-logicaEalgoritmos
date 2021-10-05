// cria as referências aos elementos de manipulação
const inNumero = document.getElementById('inNumero');
const btDecrescer = document.getElementById('btDecrescer');
const outResposta = document.getElementById('outResposta');

function listarNumeros() {
    let numero = Number(inNumero.value);

    if (numero == 0 || isNaN(numero)) {
        alert('Informe um número válido...')
        inNumero.focus();
        return;
    }

    // inicializa a variável que irá receber
    let resposta = "Entre " + numero + " e 1: ";

    // cria um for decrescente
    for (var i = numero; i > 1; i = i - 1) {
        // resposta vai acumulando números (e vírgulas)
        resposta = resposta + i + ", ";
    }
    resposta = resposta + i + ".";
    outResposta.textContent = resposta;
}

btDecrescer.addEventListener('click', listarNumeros);