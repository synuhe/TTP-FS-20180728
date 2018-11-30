const router = require("express").Router();
const { Shares } = require("../db/index");

router.get("/users/:email", async (req, res, next) => {
  try {
    const user = req.params.email;
    const data = await Shares.findByUser(user);
    res.send(data);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const data = await Shares.create(req.body);
    res.status(201).send(data);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.put("/:shareId", async (req, res, next) => {
  const id = req.params.shareId;
  try {
    await Shares.update(req.body, { where: { id: id } });
    const data = await Shares.findById(id);
    if (data === null) {
      res.sendStatus(404);
    } else {
      res.send(data);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
