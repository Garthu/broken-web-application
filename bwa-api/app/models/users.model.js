module.exports = (conn, Sequelize) => {
    const Users = conn.define("users", {
      name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
        validate: {
            isEmail: true
        }
      },
      admin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        unique: false
      }
    });
  
    return Users;
  };