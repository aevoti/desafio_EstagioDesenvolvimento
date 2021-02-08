const { verify } = require("../services/jwt");

function auth(req, res, next) {
  const { token } = req.cookies;

  // valida o token e extrai o id
  try {
    const { id } = verify(token);
    req.body.userId = id;
    next();
  } catch (e) {
    return res.status(401).send();
  }
}

module.exports = auth;
