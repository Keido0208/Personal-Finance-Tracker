// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.post("/data", (req, res) => {
  console.log(req.body.budgets);
  res.send({ status: "Data received!", yourInput: req.body.budgets });
});
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
