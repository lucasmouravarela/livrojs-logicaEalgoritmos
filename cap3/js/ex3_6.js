const inputSaque = document.getElementById('inputSaque');
const buttonExibir = document.getElementById('buttonExibir');
const outputNotasCem = document.getElementById('outputNotasCem');
const outputNotasCinquenta = document.getElementById('outputNotasCinquenta');
const outputNotasDez = document.getElementById('outputNotasDez');

function exibirSaque() {
    outputNotasCem.textContent = '';
    outputNotasCinquenta.textContent = '';
    outputNotasDez.textContent = '';

    let saque = Number(inputSaque.value);

    if (saque == 0 || isNaN(saque)) {
        alert('Informe o valor do saque corretamente.');
        inputSaque.focus();
        return
    }

    // verifica se o saque não é múltiplo de 10 ou seja, se o resto é diferente de zero
    if (saque % 10 != 0) {
        alert('Valor inválido para notas disponíveis (R$ 10, 50, 100)');
        inputSaque.focus();
        return
    }

    let notasCem = Math.floor(saque / 100);
    let resto = saque % 100;
    let notasCinquenta = Math.floor(resto / 50);
    resto = resto % 50;
    let notasDez = Math.floor(resto / 10);

    if (notasCem > 0) {
        outputNotasCem.textContent = `Notas de R$ 100: ${notasCem}`;
    }

    if (notasCinquenta > 0) {
        outputNotasCinquenta.textContent = `Notas de R$ 50: ${notasCinquenta}`;
    }

    if (notasDez > 0) {
        outputNotasDez.textContent = `Notas de R$ 10: ${notasDez}`;
    }

}

buttonExibir.addEventListener('click', exibirSaque);