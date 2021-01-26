var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    city: String,
    region: String,
    temperature: String,
    wind_speed: String,
    humidity: String,
    localtime: String
}, {versionKey: false});

module.exports = mongoose.model("Card", cardSchema);