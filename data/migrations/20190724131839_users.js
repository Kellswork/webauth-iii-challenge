exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.varchar('username', 128).notNullable();
    table.text('password').notNullable();
    table.text('department').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
