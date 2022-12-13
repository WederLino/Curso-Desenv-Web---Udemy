const nomes = ["Weder", "Marcos", "Carol", "Márcia", "Amaral"];
const nomesForeach = [];

nomes.forEach((nome, indice) => {
    console.log(indice + 1 + ") " + nome);
})

nomes.forEach((nome) => {
    nomesForeach.push(nome);
})

console.log(nomesForeach);