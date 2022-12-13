const numeros = [1, 2, 3, 4, 5];

const numerosMultiplicadosPor2 = numeros.map(x => x * 2);

const Adicionar10 = x => x + 10;

console.log(numerosMultiplicadosPor2.map(Adicionar10));
