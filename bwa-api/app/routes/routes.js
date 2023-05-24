module.exports = app => {
    require('./xss.route')(app)
    require('./relative.route')(app)
    require('./rce.route')(app)
  };