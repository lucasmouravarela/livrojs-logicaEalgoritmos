const inHoraBrasil = document.getElementById('inHoraBrasil');
const btnExibir = document.getElementById('btnExibir');
const outHoraFranca = document.getElementById('outHoraFranca');

function calcularFuso() {
    let horaBrasil = Number(inHoraBrasil.value);

    if (inHoraBrasil == '' || isNaN(horaBrasil)) {
        alert('Informe a hora no Brasil corretamente');
        inHoraBrasil.focus();
        return;
    }

    let horaFranca = horaBrasil + 5;

    if (horaFranca > 24) {
        horaFranca = horaFranca - 24;
    }

    outHoraFranca.textContent = `Hora na França: ${horaFranca.toFixed(2)};`
}

btnExibir.addEventListener('click', calcularFuso);