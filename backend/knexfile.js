module.exports = {
  client: "sqlite3",
  connection: {
    filename: "./src/database/db.sqlite",
  },
  migrations: {
    directory: "./src/database/migrations",
  },
  useNullAsDefault: true,
};
