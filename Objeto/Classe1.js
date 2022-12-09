class Lancamento{
    constructor(nome = "Genérico", valor = 10){
        this.nome = nome;
        this.valor = valor;
    }
}

class CicloFinanceiro{
    constructor(mes, ano)
    {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    }

    adicionarLancamentos(...lancamentos){
        lancamentos.forEach(lancamento => this.lancamentos.push(lancamento))
    }

    sumario()
    {
        let valorConsolidado = 0;

        this.lancamentos.forEach(lancamento => valorConsolidado += lancamento.valor);

        return valorConsolidado;
    }
}

const salario = new Lancamento("Salário", 4000);
const contaDeLuz = new Lancamento("Luz", -100);

const contas = new CicloFinanceiro(01, 2023);
contas.adicionarLancamentos(salario, contaDeLuz);

console.log(contas.sumario());
