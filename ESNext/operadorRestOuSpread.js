const pessoa1 = {nome: "Weder", salario: 0};

const filhoPessoa1 = {...pessoa1, filho: true}

console.log(filhoPessoa1)

const timeA = ["Weder", "João", "Marcos"];
const timeB = ["Maria", "Carla", "Morgana"];

const timeFinal = [...timeA, ...timeB];

console.log(timeFinal);