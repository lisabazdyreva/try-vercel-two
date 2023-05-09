const express = require("express");
const app = express();

const router = require("./router/index.js");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.listen(5000, () => console.log(`Server started on port ${5000}`));
module.exports = app;
