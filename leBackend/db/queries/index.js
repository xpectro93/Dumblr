const pgp = require('pg-promise')({});

const connectionString = process.env.DATABASE_URL || 'postgres://localhost/dumblr'

const db = pgp(connectionString);

module.exports = db
