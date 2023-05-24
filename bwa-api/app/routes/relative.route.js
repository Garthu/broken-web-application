module.exports = app => {
    const relative = require('../controllers/relative.controller')

    var router = require("express").Router()
  
    router.get("/", relative.download)
  
    app.use('/relative', router)
  };