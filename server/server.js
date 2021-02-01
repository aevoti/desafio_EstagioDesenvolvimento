const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(express.json());
app.use(cors());

app.get('/key', (req, res) => {
    res.json({accessKey: process.env.ACCESS_KEY});
})

app.listen(8080, () => {
    console.log('rodando');
})
