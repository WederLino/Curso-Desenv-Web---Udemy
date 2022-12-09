const pai = {nome: "Weder", corCabelo: "Preto"};


const filho1 = Object.create(pai);

filho1.nome = "Jão";

console.log(filho1.nome);

const filha1 = Object.create(pai, {
    nome: {value: "Maria", writable: false, enumerable: true}

});

console.log(filha1.nome, filha1.corCabelo);

console.log(Object.keys(filha1));

for(let key in filha1){

    filha1.hasOwnProperty(key)? console.log(key) : console.log("Por Herança: "+ key)
}
