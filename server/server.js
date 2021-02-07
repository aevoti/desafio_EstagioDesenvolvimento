const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const db = require('./db');

app.use(express.json());
app.use(cors());

app.get('/key', (req, res) => {
    res.json({accessKey: process.env.ACCESS_KEY});
})

app.get('/weather', (req, res) => {
   db.find((e, result) => {
        if(e) console.log(e);
        res.json(result);
   })
})

app.post('/weather', (req, res) => {
    const doc = {...req.body};
    db.insert(doc, (e, result) => {
        if(e) res.json(e);
        res.json(result);
    })
})

app.delete('/weather/:_id', (req, res) => {
    const { _id } = req.params;
    db.deleteOne(_id, (e, result) => {
        if(e) res.json(e);
        res.json(result);
    })
})

const port = 8080;

app.listen(port, () => console.log(`Rodando na porta ${port}`));
