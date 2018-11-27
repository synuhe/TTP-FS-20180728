const Sequelize = require("sequelize");
const db = require("./database");

const Shares = db.define("shares", {
  ticker: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.DECIMAL
  },
  quantity: {
    type: Sequelize.INTEGER
  }
});

module.exports = Shares;
