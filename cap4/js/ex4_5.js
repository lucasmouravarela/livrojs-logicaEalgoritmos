const inDescricao = document.getElementById('inDescricao');
const inValor = document.getElementById('inValor');
const btRegistrar = document.getElementById('btRegistrar');
const outLista = document.getElementById('outListaContas');
const outTotal = document.getElementById('outTotal');

let numContas = 0;
let valTotal = 0;

let resposta = "";


function registrarConta() {

    let descricao = inDescricao.value;
    let valor = Number(inValor.value);

    if (descricao == "" || valor == 0 || isNaN(valor)) {
        alert('Informe os dados corretamente...');
        inDescricao.value = '';
        inValor.value = '';
        inDescricao.focus();
        return
    }

    numContas++;
    valTotal = valTotal + valor;

    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n";

    outLista.textContent = resposta + "-----------------------";
    outTotal.textContent = numContas + " Conta(s) - Total R$: " + valTotal.toFixed(2);

    inDescricao.value = "";
    inValor.value = "";
    inDescricao.focus();
}

btRegistrar.addEventListener('click', registrarConta);

