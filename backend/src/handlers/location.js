const { notInformed } = require("../util/validation");
const db = require("../services/knex");

async function listLocations(req, res) {
  const { userId } = req.body;

  // consulta os locais associados ao usuário
  const locations = await db("users")
    .join("users_locations", "users.id", "=", "users_locations.user_id")
    .join("locations", "users_locations.location_id", "=", "locations.id")
    .where({ "users.id": userId })
    .select("locations.name");

  // extrai a chave name dos objetos
  const locationsArray = locations.map((location) => location.name);

  res.status(200).json(locationsArray);
}

async function createLocation(req, res) {
  const { userId } = req.body;
  const { name } = req.query;

  // valida o parâmetro
  try {
    notInformed(name, "Location not informed");
  } catch (e) {
    return res.status(400).json(e);
  }

  // consulta o local, se ele não existe é criado um
  let locationId;
  const location = await db("locations").where({ name }).first();
  if (location) {
    locationId = location.id;
  } else {
    [locationId] = await db("locations").insert({ name });
  }

  // verifica se o usuário já esta associado ao local
  const userHasLocation = await db("users_locations")
    .where({ user_id: userId, location_id: locationId })
    .first();
  if (userHasLocation) {
    return res.status(400).json({ message: "Location already added" });
  }

  // associa o usuário ao local
  await db("users_locations").insert({
    user_id: userId,
    location_id: locationId,
  });

  res.status(201).json({ message: "Location added" });
}

async function deleteLocation(req, res) {
  const { userId } = req.body;
  const { name } = req.query;

  // valida o parâmetro
  try {
    notInformed(name, "Location not informed");
  } catch (e) {
    return res.status(400).json(e);
  }

  // verifica se o local existe
  const location = await db("locations").where({ name }).select("id").first();
  if (!location) {
    return res.status(404).json({ message: "Location not found" });
  }

  // deleta o registro
  await db("users_locations")
    .where({
      user_id: userId,
      location_id: location.id,
    })
    .del();

  res.status(204).json({ message: "Location deleted" });
}

module.exports = {
  listLocations,
  createLocation,
  deleteLocation,
};
