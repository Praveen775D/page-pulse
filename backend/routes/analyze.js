const express = require("express");

const router = express.Router();

const { analyzeWebsite } = require("../controllers/analyzeController");

router.post("/", analyzeWebsite);

module.exports = router;