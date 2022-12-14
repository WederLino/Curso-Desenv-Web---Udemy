const port = 3009;

const express = require('express')

const app = express();

app.listen(port);

app.get("/produtos", (req, resp) =>{
    resp.send({nome: "Camaro", preco: 999})
});
