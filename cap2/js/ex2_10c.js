const inputProduto = document.getElementById("inProduto");
const inputPreco = document.getElementById("inPreco");
const outputPromo = document.getElementById("outPromocao");
const outTerceiraUnid = document.getElementById("outTerceiraUnidade");

function verPromocao() {
  let produto = inputProduto.value;
  let preco = Number(inputPreco.value);

  let promoUnidade = preco / 2;
  let promo = preco * 2 + promoUnidade;

  outputPromo.textContent = `${produto} - Promoção: Leve 3 por R$: ${promo.toFixed(
    2
  )}`;
  outTerceiraUnid.textContent = `O 3º produto custa apenas R$: ${promoUnidade.toFixed(
    2
  )}`;
}
var btPromo = document.getElementById("btPromocao");
btPromo.addEventListener("click", verPromocao);
