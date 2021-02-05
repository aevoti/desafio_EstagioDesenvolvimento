const axios = require('axios')
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors()) 

const access_key = '4d0b056957bfcccf0690ee0b9bf3c04e'

app.get('/city', async (req, res) => {  

  const city = JSON.stringify(req.query.query)
  const { data } = await axios(`http://api.weatherstack.com/current?access_key=${access_key}&query=${city}`)
  res.send(data)
 
})

app.listen('4567')
//npm start to initialize