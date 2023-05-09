const express = require("express");
const app = express();

const router = require("./router/index.js");

app.use(express.json());

app("/api", router);

app.listen(5000, () => console.log(`Server started on port ${5000}`));
module.exports = app;
