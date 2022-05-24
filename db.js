const mongoose = require("mongoose");

mongoose.connect(
  "........",
  { useUnifiedTopology: true, useNewUrlParser: true }
);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("database connected"));

module.exports = mongoose;
