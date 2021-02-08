require("dotenv").config();
const jwt = require("jsonwebtoken");

function sign(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET);
}

function verify(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = {
  sign,
  verify,
};
