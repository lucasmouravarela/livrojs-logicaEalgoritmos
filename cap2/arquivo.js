function mostrarOla() {
    // salvando na variável o value digitado no campo
    let nome = document.getElementById("nome").value;
    // adicionando o texto no parágrafo
    document.getElementById("resposta").textContent = "Olá " + nome;
}
var mostrar = document.getElementById("mostrar");
mostrar.onclick = mostrarOla;