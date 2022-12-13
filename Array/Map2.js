//DESAFIO: Retornar o array apenas com os preços

const carrinho = [
    '{"nome": "Aço", "preco": "999"}',
    '{"nome": "Cimento", "preco": "100"}',
    '{"nome": "Pá", "preco": "30"}',
    '{"nome": "Furadeira", "preco": "200"}'
];

const arrayComOsPrecos = carrinho.map(x => JSON.parse(x)).map(x => x.preco);

console.log(arrayComOsPrecos);