const inNome = document.getElementById("inNome");
const inMasculino = document.getElementById("inMasculino");
const inFeminino = document.getElementById("inFeminino");
const inAltura = document.getElementById("inAltura");
const btnCalcular = document.getElementById("btnCalcular");
const btnLimpar = document.getElementById("btnLimpar");
const outResposta = document.getElementById("outResposta");

function calcularPeso() {
  let nome = inNome.value;
  let masculino = inMasculino.checked;
  let feminino = inFeminino.checked;
  let altura = Number(inAltura.value);

  if (nome == "" || (masculino == false && feminino == false)) {
    alert("Porfavor, informe o nome e selecione o sexo...");
    inNome.focus();
    return;
  }
  if (altura == 0 || isNaN(altura)) {
    alert("Porfavor, informe a altura corretamente...");
    inAltura.focus();
    return;
  }
  if (masculino) {
    var peso = 22 * Math.pow(altura, 2); //Math.pow eleva ao quadrado
  } else {
    var peso = 21 * Math.pow(altura, 2);
  }

  outResposta.textContent = `${nome} seu peso ideal é ${peso.toFixed(3)}kg`;
}

btnCalcular.addEventListener("click", calcularPeso);

function limparCampos() {
  document.getElementById("inNome").value = "";
  document.getElementById("inMasculino").checked = false;
  document.getElementById("inFeminino").checked = false;
  document.getElementById("inAltura").value = "";
  document.getElementById("outResposta").textContent = "";
  // posiciona (joga o foco) no elemento inNome
  document.getElementById("inNome").focus();
}

btnLimpar.addEventListener('click', limparCampos);

// function limparCampos2() {
//   // recarrega a página
//   location.reload();
// }

// btnLimpar.addEventListener("click", limparCampos2);
