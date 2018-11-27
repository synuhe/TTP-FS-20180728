"use strict";

const { db } = require("./Server/db");
const app = require("./Server");
const PORT = 1337;

db.sync().then(() => {
  console.log("db synced");
  app.listen(PORT, () => console.log(`listening on ${PORT}`));
});
