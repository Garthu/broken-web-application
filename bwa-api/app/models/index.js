const Sequelize = require('sequelize')

const conn = new Sequelize(process.env.DB_NAME,
  process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DIALECT,
    port: process.env.DB_PORT
  }
)

const db = {}

db.Sequelize = Sequelize
db.conn = conn

db.Users = require('./users.model.js')(conn, Sequelize)

module.exports = { db }