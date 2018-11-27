"use strict";

const router = require("express").Router();
const shares = require("./shares");
const users = require("./users");
const { User, Shares } = require("../db/index");

router.use("/users", users);

router.use("/shares", shares);

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
