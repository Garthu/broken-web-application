module.exports = app => {
    const user = require('../controllers/user.controller')

    var router = require("express").Router()
  
    router.post("/", user.create)
    
    router.get("/login", user.login)

    router.post("/set-admin", user.setAdmin)

    router.post("/set-password", user.setPassword)
  
    app.use('/user', router)
  };