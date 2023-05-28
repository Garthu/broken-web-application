module.exports = app => {
    const user = require('../controllers/user.controller')

    var router = require("express").Router()
  
    router.post("/", user.create)
    
    router.get("/login", user.login)
  
    app.use('/user', router)
  };