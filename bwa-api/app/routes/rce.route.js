module.exports = app => {
    const rce = require('../controllers/rce.controller')

    var router = require("express").Router()
  
    router.get("/", rce.dns)
  
    app.use('/rce', router)
  };