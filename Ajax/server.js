const express = require("express");
const app = express();
const port = 4003;
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(express.static("."))
app.listen(port);


app.get("/teste", (req, res) =>{
    res.send("ok")
})

