module.exports = app => {
    const xss = require('../controllers/xss.controller')

    var router = require("express").Router();
  
    // Create a new Tutorial
    router.get("/", xss.createTest);
  
    app.use('/xss_route', router);
  };