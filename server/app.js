const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const card_controller = require('./card_controller');
const mongoose = require('mongoose');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors({credentials:true, origin: 'https://127.0.0.1:4200'}));

mongoose.connect("mongodb://localhost:27017/dbweather", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use("/cards", card_controller);


app.listen(3000, function() {
  console.log('listening on 3000')
});

