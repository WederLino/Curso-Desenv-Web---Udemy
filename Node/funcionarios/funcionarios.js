const axios = require('axios')

const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";

axios.get(url).then(response => {
    const listaFuncionarios = response.data;

    const mulheresChinesas = listaFuncionarios.filter(x => x.pais == "China" && x.genero == "F").reduce((anterior, posterior) =>{
        return anterior.salario < posterior.salario ? anterior : posterior;
    });
    
    console.log(mulheresChinesas);
})