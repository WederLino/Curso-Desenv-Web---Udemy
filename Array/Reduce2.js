//Desafio 1: Dizer se todos os alunos são bolsistas
//Desafio 2: Dizer se algum aluno é bolsistas


const alunos = [
    {nome: "Weder", nota: 10, bolsista: true},
    {nome: "Maria", nota: 9, bolsista: false},
    {nome: "João", nota: 8, bolsista: false},
    {nome: "Renato", nota: 7, bolsista: true}
];

const todosBolsistas = (anterior, sucessor) => anterior && sucessor;

const todosAlunosEBolsista = alunos.map(x => x.bolsista).reduce(todosBolsistas);

console.log(todosAlunosEBolsista)

const algumBolsista = (anterior, sucessor) => anterior || sucessor;

const algumAlunoEBolsista = alunos.map(x => x.bolsista).reduce(algumBolsista);

console.log(algumAlunoEBolsista)