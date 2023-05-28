module.exports = app => {
  require('./relative.route')(app)
  require('./rce.route')(app)
  require('./user.route')(app)
};