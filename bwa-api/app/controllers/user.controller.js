const path = require('path')
const { db } = require('../models/index')

exports.create = (req, res) => {
  const name = req.query.name
  const password = req.query.password
  const email = req.query.email

  const regex = /("[^"]*"|[^@])*@([^@]*)/

  if (name == null || password == null
      || email == null || !regex.test(email)) {
    res.status(400).send('Dados de entrada inválidos')
  } else { 
    const new_user = {
      name: name,
      password: password,
      email: email,
      admin: 0
    }
  
    db.Users.create(new_user)
    
    res.status(200).send('Usuário criado')
  }
}

exports.login = (req, res) => {
  const password = req.query.password
  const email = req.query.email

  if (password == null || email == null) {
      res.status(400).send('Dados de entrada inválidos')
  } else {
    db.conn.query(`SELECT name, admin FROM users WHERE email = '${email}' AND password = '${password}'`, {
      type: db.Sequelize.QueryTypes.SELECT
    })
    .then((result) => {
      console.log(result[0])
      if (result[0] == null) {
        res.status(401).send('Unauthorized')
      } else {
        session = {
            name: result[0].name,
            session: 'active',
            admin: result[0].admin
        }
        res.status(200).send(session)
      }
    })
  }
}