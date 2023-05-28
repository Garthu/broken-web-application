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
  console.log(req)
  const password = req.query.password
  const email = req.query.email

  if (password == null || email == null) {
      res.status(400).send('Dados de entrada inválidos')
  } else {
    db.conn.query(`SELECT name, admin FROM users WHERE email = '${email}' AND password = '${password}'`, {
      type: db.Sequelize.QueryTypes.SELECT
    })
    .then((result) => {
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

exports.setPassword = (req, res) => {
  const email = req.query.email
  const password = req.query.password

  if (email == null) {
      res.status(400).send('Dados de entrada inválidos')
  } else {
    db.conn.query(`UPDATE users SET password = '${password}' WHERE email = '${email}'`, {
      type: db.Sequelize.QueryTypes.UPDATE
    })
    .then((result) => {
      if (result[1] == 1) {
        res.status(200).send('Senha alterada')
      } else {
        res.status(400).send('Não foi possível atualizar a senha')
      }
    })
  }
}

exports.setAdmin = (req, res) => {
  const email = req.query.email

  if (email == null) {
      res.status(400).send('Dados de entrada inválidos')
  } else {
    db.conn.query(`UPDATE users SET admin = 1 WHERE email = '${email}'`, {
      type: db.Sequelize.QueryTypes.UPDATE
    })
    .then((result) => {
      if (result[1] == 1) {
        res.status(200).send('Usuário agora é admin')
      } else {
        res.status(400).send('Não foi possível atualizar o User')
      }
    })
  }
}