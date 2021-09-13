const inHoraBrasil = document.getElementById('inHoraBrasil');
const btnExibir = document.getElementById('btnExibir');
const outHoraFranca = document.getElementById('outHoraFranca');

function calcularFuso() {
    let horaBrasil = Number(inHoraBrasil.value);

    // validando/verificando se o campo está preenchido e se é número
    if (inHoraBrasil == '' || isNaN(horaBrasil)) {
        alert('Informe a hora no Brasil corretamente');
        inHoraBrasil.focus();
        return;
    }

    // convertendo hora brasil para frança
    let horaFranca = horaBrasil + 5;
    // verificando se já é outro dia na frança e subtrai 24 do valor inserido
    if (horaFranca > 24) {
        horaFranca = horaFranca - 24;
    }

    outHoraFranca.textContent = `Hora na França: ${horaFranca.toFixed(2)};`
}

btnExibir.addEventListener('click', calcularFuso);