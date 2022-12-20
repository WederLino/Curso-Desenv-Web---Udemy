const express = require("express");
const app = express();
const port = 4003;

const db = []

app.use(express.urlencoded({ extended: false }))

app.post("/usuarios", (req, res) =>{

    let usuario = req.body;

    db.push(usuario)

    res.send("<h1>Ok</h1>")

   console.log(req.body)
})

app.listen(port);

