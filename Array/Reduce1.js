const carrinho = [
    {nome: "Aço", preco: 999},
    {nome: "Cimento", preco: 100},
    {nome: "Pá", preco: 30},
    {nome: "Furadeira", preco: 200}
];

const SomaDeTodosOsPrecos = carrinho.map(x => x.preco).reduce((acumulador, atual) => acumulador + atual );

console.log(SomaDeTodosOsPrecos);