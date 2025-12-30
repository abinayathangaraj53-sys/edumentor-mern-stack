
const router = require("express").Router();

router.post("/", (req,res) => {
  const { lesson, question } = req.body;
  res.json({
    answer: `AI explanation for '${question}' from lesson '${lesson}'.`
  });
});

module.exports = router;
