function verPromocao() {
    var inputProduto = document.getElementById('inProduto');
    var inputPreco = document.getElementById('inPreco');
    var outputPromo = document.getElementById('outPromocao');
    var outTerceiraUnid = document.getElementById('outTerceiraUnidade');

    var produto = inputProduto.value;
    var preco = Number(inputPreco.value);

    var promoUnidade = preco / 2;
    var promo =  (preco * 2) + promoUnidade;

    outputPromo.textContent = `${produto} - Promoção: Leve 3 por R$: ${promo.toFixed(2)}`;
    outTerceiraUnid.textContent = `O 3º produto custa apenas R$: ${promoUnidade.toFixed(2)}`;
}
var btPromo = document.getElementById('btPromocao');
btPromo.addEventListener('click', verPromocao);