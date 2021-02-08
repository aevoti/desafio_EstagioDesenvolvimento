const { notInformed, passwordsEqual } = require("../util/validation");
const bcrypt = require("bcrypt");
const jwt = require("../services/jwt");
const db = require("../services/knex");

async function signup(req, res) {
  const { username, password, confirmPassword } = req.body;

  // valida os campos
  try {
    notInformed(username, "Username not informed");
    notInformed(password, "Password not informed");
    notInformed(confirmPassword, "Confirm password not informed");
    passwordsEqual(password, confirmPassword, "Passwords must to be equal");
  } catch (e) {
    return res.status(400).json(e);
  }

  // verifica se o usuário já existe
  const usernameExists = await db("users").where({ username }).first();
  if (usernameExists) {
    return res.status(400).json({ message: "Username already taken" });
  }

  // cria um novo usuário se ele não existe
  const hash = await bcrypt.hash(password, 10);
  const [userId] = await db("users").insert({ username, password: hash });

  // retorna o token com o id
  const token = jwt.sign({ id: userId });
  res.cookie("token", token);
  res.status(201).json(token);
}

async function signin(req, res) {
  const { username, password } = req.body;

  // valida os campos
  try {
    notInformed(username, "Username not informed");
    notInformed(password, "Password not informed");
  } catch (e) {
    return res.status(400).json(e);
  }

  // consulta o usuário e verifica se ele existe
  const user = await db("users")
    .where({ username })
    .select("id", "password")
    .first();
  if (!user) {
    return res.status(404).json({ message: "User not exists" });
  }

  // verifica se a senha está correta
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(401).json({ message: "Wrong password" });
  }

  // retorna o token com o id
  const token = jwt.sign({ id: user.id });
  res.cookie("token", token);
  res.status(200).json(token);
}

module.exports = {
  signup,
  signin,
};
