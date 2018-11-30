const router = require("express").Router();
const { User } = require("../db/index");

router.get("/", async (req, res, next) => {
  try {
    const data = await User.findAll();
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const data = await User.create(req.body);
    res.status(201).send(data);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
