var express = require("express");
var router = express.Router();
var Card = require("./card");

router.post("/", function (req, res) {
  console.log(req.body);
  let d = new Card({
    id: req.params.id,
    city: req.body.city,
    region: req.body.region,
    temperature: req.body.temperature,
    wind_speed: req.body.wind_speed,
    humidity: req.body.humidity,
    localtime: req.body.localtime,
  });
  d.save((erro, card) => {
    if (erro) res.status(500).send(erro);
    else res.status(200).send(card);
  });
});

router.get("/", function (req, res) {
  Card.find().exec((erro, card) => {
    if (erro) res.status(500).send(erro);
    else res.status(200).send(card);
  });
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  Card.deleteOne({ _id: id }, (erro) => {
    if(erro)
        res.status(500).send(erro);
    else
        res.status(200).send({});
  });
});


module.exports = router;
