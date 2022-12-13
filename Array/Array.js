let aprovados = ["Weder", "Marcelo", "Ana"];

console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); // undefined

aprovados[3] = "Jorge";

console.log(aprovados[3]);

aprovados.push("Yasuo");

console.log(aprovados.length);

aprovados[8] = "Maria";

console.log(aprovados[7] === undefined);

console.log(aprovados);

aprovados.sort(); // Coloca em ordem alfabética

console.log(aprovados);

delete aprovados[1];

console.log(aprovados[1]);

aprovados = ["Weder", "Marcelo", "Ana"];

aprovados.splice(0, 1, "João", "Guilherme") // Remove o primeiro elemento e adiciona outros 2 elementos

console.log(aprovados);

