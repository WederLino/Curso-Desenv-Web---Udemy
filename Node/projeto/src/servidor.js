const dados = require("./bancoDeDados");
const bodyParser = require('body-parser');

const port = 3009;

const express = require('express');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port);

app.get("/pessoas", (req, resp) =>{
    resp.send(dados.db)
});

app.get("/pessoa/:id", (req, res) =>{
        let id = parseInt(req.params.id);
        
        let pessoa = dados.db.find(pessoa => pessoa.id == id);

        res.send(pessoa);
})

app.post("/pessoas", (req, resp) =>{
    
    let pessoa = req.body;

    dados.db.push(pessoa);
    
})

app.put("/pessoa/:id", (req, resp) =>{
    
    let pessoa = req.body;

    let pessoaOriginal = dados.db.find(pessoa => pessoa.id == req.params.id);

    pessoaOriginal.nome = pessoa.nome;
    pessoaOriginal.idade = pessoa.idade;
})

app.delete("/pessoa/:id", (req, resp) =>{

    let pessoaIndex = dados.db.findIndex(pessoa => pessoa.id == req.params.id);

    dados.db.splice(pessoaIndex, pessoaIndex + 1)
})

