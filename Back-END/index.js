require("dotenv").config(); 

const db = require("./db");
const express = require('express');

const port = process.env.PORT;
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());


app.get('/depoimentos', async (req, res) => {
    const depoimentos = await db.selectDepoimentos();
    res.json(depoimentos);
});


app.get('/depoimentos/:id', async (req, res) => {
    const depoimento = await db.selectDepoimento(req.params.id);
    res.json(depoimento);
});


app.post("/depoimentos", async (req, res) => {
    await db.insertDepoimento(req.body);
    res.sendStatus(201);
});


app.patch("/depoimentos/:id", async (req, res) => {
    await db.updateDepoimento(req.params.id, req.body);
    res.sendStatus(204); 
});

   
app.delete("/depoimentos/:id", async (req, res) => {
    await db.deleteDepoimento(req.params.id);
    res.sendStatus(204);
});


app.listen(port);
console.log("Backend Rodando!");
