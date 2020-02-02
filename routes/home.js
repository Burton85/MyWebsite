const express = require("express");
const router = express.Router();

//home page
router.get("/", (req, res) => {
  res.render("index");
});
router.get("/learn", (req, res) => {
  res.render("learn");
});
router.get("/work", (req, res) => {
  res.render("work");
});
module.exports = router;
