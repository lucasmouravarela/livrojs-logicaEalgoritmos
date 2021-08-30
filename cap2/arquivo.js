function mostrarOla() {
    // capturando o value digitado no campo
    let nome = document.getElementById("nome").value;
    // adicionando o texto no parágrafo
    document.getElementById("resposta").textContent = "Olá " + nome;
    // adicionando o texto ao span
    document.getElementById("resposta2").textContent = "Olá " + nome;
}
var mostrar = document.getElementById("mostrar");
mostrar.onclick = mostrarOla;