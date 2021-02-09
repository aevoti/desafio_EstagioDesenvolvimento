const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const events = require('./events');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'weather_stack'
});

connection.connect();

//const port = process.env.PORT || 8080;
const port = 3000;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(events(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

/*
app.get('/', function(req, res){
  res.send("Hello from server!!!!!");
})

*/
