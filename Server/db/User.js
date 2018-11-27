const Sequelize = require("sequelize");
const db = require("./database");

const User = db.define("user", {
  name: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  password: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  money: {
    type: Sequelize.DECIMAL(10, 2)
  }
});

User.beforeCreate((user, options) => {
  if (user.money === null) {
    user.money = 5000.0;
  }
});

module.exports = User;
