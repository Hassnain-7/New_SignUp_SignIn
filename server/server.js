const express = require("express");
require("dotenv").config();
const router = require("./routes/auth");
const connection = require("./database");

const app = express();

app.use(express.json());

app.use("/auth", router);

connection();

app.listen(process.env.PORT, () => {
  console.log(`Server listen at  ${process.env.PORT}`);
});
