const piloto = ["Rubinho", "Ayrton", "Sonic", "Mario"];

piloto.pop() // Remove último elemento do array

console.log(piloto);

piloto.push("Marquin") // Adiciona elemento no final do array

console.log(piloto);

piloto.shift() // Remove primeiro elemento do array

console.log(piloto);

piloto.unshift("Massa") // Adiciona elemento no começo do array

console.log(piloto);

piloto.splice(2, 0, "Bottas", "Jorgim") // Adiciona os elementos depois do segundo índice

console.log(piloto);

piloto.splice(3, 1) // remove o elemento do índice 3;

console.log(piloto);

const algunsPilotos1 = piloto.slice(3) // retorna um novo array começando do índice 3

console.log(algunsPilotos1);

const algunsPilotos2 = piloto.slice(1, 4) // retorna um novo array começando do índice 1 ao índice 3

console.log(algunsPilotos2);

