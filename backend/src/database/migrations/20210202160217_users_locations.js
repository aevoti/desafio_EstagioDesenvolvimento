
exports.up = function(knex) {
  return knex.schema.createTable('users_locations', function (table) {
    table.integer('user_id').notNullable().unsigned();
    table.foreign('user_id').references('id').inTable('users');
    table.integer('location_id').notNullable().unsigned();
    table.foreign('location_id').references('id').inTable('locations');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users_locations');
};
