const Sequelize = require("sequelize");
const db = require("./database");
const User = require("./User");

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

Shares.findByUser = async function(user) {
  const data = await Shares.findAll({
    include: [{ model: User, where: { name: user } }]
  });
  return data;
};

module.exports = Shares;
