// declara a função mostrarOla
function mostrarOla() {
    // captura o valor do campo (atráves do id=) nome
    var nome = document.getElementById("nome").value;
    // exibe no parágrafo (resposta): "Olá " e o nome informado
    document.getElementById("resposta").textContent = "Olá " + nome;
    // usando template strings
    document.getElementById("resposta2").textContent = `Olá ${nome}`;
}
// cria uma referência ao elemento input botão (com id=) mostrar
var mostrar = document.getElementById("mostrar");
// registra para o botão "mostrar" um ouvinte para o evento click,
// que ao ser clicado irá chamar a função mostrarOla
mostrar.addEventListener("click", mostrarOla);