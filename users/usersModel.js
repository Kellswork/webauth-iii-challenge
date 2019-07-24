const db = require('../data/dbConfig');

module.exports = {
  createUser,
  findUsername,
  getUsers
};

function createUser(user) {
  return db('users')
    .insert(user)
    .then(ids => findUser(ids[0]));
}

function getUsers() {
  return db('users').select('id','username', 'department');
}

function findUser(id) {
  return db('users').select('id','username','department').where({ id }).first();
}

function findUsername(username) {
  return db('users').where({ username });
}
