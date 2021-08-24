function mostrarPromocao() {
    var inProduto = document.getElementById('inProduto');
    var inPreco = document.getElementById('inPreco');
    var outPromo = document.getElementById('outPromo');
    var outValor = document.getElementById('outValor');

    var medicamento = inProduto.value;
    var preco = Number(inPreco.value);

    var promo = Math.floor(preco) * 2

    outPromo.textContent = `Promoção de ${medicamento}`
    outValor.textContent = `Leve 2 por apenas R$: ${promo}`;
}
var btPromo = document.getElementById('btPromo');
btPromo.addEventListener('click', mostrarPromocao);