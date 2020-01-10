const express = require('express');

const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb://localhost:27017/tienda", { useNewUrlParser: true })
    .then(db => console.log("Conexión a BD correcta"))
    .catch( err => console.log("ERROR AL CONECTAR CON BD"));



app.get("/", (req, res) => { res.send("www.twitch.tv/waide") });


app.get("/aa", (req, res) => { res.send("hola") });



app.listen(3000, () => console.log("Servidor Iniciado..."));