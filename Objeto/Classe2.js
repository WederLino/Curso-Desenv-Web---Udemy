class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome;
    }
}

class Pai extends Avo{
    constructor(sobrenome, profissao = "Dev"){
        super(sobrenome);
        this.profissao = profissao;
    }
}

class Filho extends Pai{
    constructor(){
        super("Lino")
    }
}

const filho = new Filho();

console.log(filho);