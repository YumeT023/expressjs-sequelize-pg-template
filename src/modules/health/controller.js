const { Router } = require("express");

const router = Router();

router.get("/", (_, res) => {
  res.end("pong!");
});

module.exports = router;
