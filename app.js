const { json } = require('express');
const express = require('express');
const app = express();
const fn = require('./functions');

const PORT = process.env.PORT || 8080;

let visitasItems=0;
let visitasRandom=0;

express.json();

app.get("/", (req, res) => {
    res.send("hola malo ql.");
});

app.get("/items", (req, res) => {
    visitasItems++;
    res.send(fn.getProductos());    
});

app.get("/item-random", (req, res) => {
    visitasRandom++;
    res.send(fn.getItemRandom());
});

app.get("/visitas", (req, res) => {
    res.json({visitas: {items: visitasItems, item: visitasRandom}});
})

app.listen(PORT, ()=> {
    console.log("Servidor activo en puerto: ", PORT);
})