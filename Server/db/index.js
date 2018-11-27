"use strict";

const db = require("./database");
const Shares = require("./Shares.js");
const User = require("./User.js");

// The purpose of this module is to bring the Sequelize instance (`db`) together
// with the models Shares and User.

Shares.belongsTo(User);
User.hasMany(Shares);

module.exports = {
  db,
  Shares,
  User
};
