const Router = require("express");
const router = new Router();

router.get("/", (req, res) => {
  res.send("Express on Vercel");
});

module.exports = router;
