const inNome = document.getElementById("inNome");
const inNota1 = document.getElementById("inNota1");
const inNota2 = document.getElementById("inNota2");
const btnResultado = document.getElementById("btnResultado");
const outMedia = document.getElementById("outMedia");
const outSituacao = document.getElementById("outSituacao");

function calcularMedia() {
    let nome = inNome.value;
    let nota1 = Number(inNota1.value);
    let nota2 = Number(inNota2.value);

    let media = (nota1 + nota2) / 2;

    if (media >= 7) {
        outMedia.textContent = `Médias das Notas: ${media}`;
        outSituacao.textContent = `Parabéns ${nome}, Você foi aprovado!`;
    } else {
        outMedia.textContent = `Médias das Notas: ${media}`;
        outSituacao.textContent = `${nome}, Você foi reprovado!`;
    }
}

btnResultado.addEventListener('click', calcularMedia);
