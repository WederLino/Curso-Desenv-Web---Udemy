function Aula(nome, videoID){
    this.nome = nome;
    this.videoID = videoID;
}

const aula1 = new Aula("Objetos", 1);
const aula2 = new Aula("Arrays", 2);

console.log(aula1, "\n", aula2);


//Simulando o New
function novo(funcao, ...params){
    const obj = {};
    obj.__proto__ = funcao.prototype;
    funcao.apply(obj, params);
    return obj;
}

const aula3 = novo(Aula, 'Classes', 3);

console.log(aula3);
