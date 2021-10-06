const inNumero = document.getElementById('inNumero');
const outEspacos = document.getElementById('outEspacos');
const btPreencher = document.getElementById('btPreencher');

function preencherEstrelas() {
    let num = Number(inNumero.value);

    if (num == 0 || isNaN(num)){
        alert('Número inválido...')
        inNumero.value = "";
        inNumero.focus();
        return
    }

    let estrelas = "";

    for (var i = 1; i <= num; i++) {
        if (i % 2 == 1) {
            estrelas+= "*";
        } else {
            estrelas+= "-";
        }
    }

    outEspacos.textContent = estrelas;
}

btPreencher.addEventListener('click', preencherEstrelas);