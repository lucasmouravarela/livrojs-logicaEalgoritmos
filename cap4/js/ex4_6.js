const inNumero = document.getElementById('inNumero');
const btVerificar = document.getElementById('btVerificar');
const outResposta = document.getElementById('outResposta');

function verificarPrimos() {
    let num = Number(inNumero.value);

    if (num == 0 || isNaN(num)) {
        alert('Número Inválido...');
        inNumero.value = "";
        inNumero.focus();
        return
    }
    
    // let numDivisores = 0; declara e inicializa contador
    let temDivisor = 0;

    // pecorre todos os possíveis divisores do número
    for (var i = 2; i <= num / 2; i++) {
        // verifica se i (1, 2, 3...) é divisor do num
        if(num % i == 0) {
            temDivisor = 1;
            break;
            // numDivisores++; se é, incrementa contador
        }
    }

    // se possui apenas 2 divisores, é primo
    if (num > 1 && !temDivisor) {
        outResposta.textContent = `${num} É primo.`
    } else {
        outResposta.textContent = `${num} Não é primo.`
    }
}

btVerificar.addEventListener('click', verificarPrimos);