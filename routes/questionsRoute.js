const express = require("express");
const questionsRoute = express.Router();

const questionsGet = require("../controllers/questionGet");

questionsRoute.get("/:question_id", questionsGet.getQuestion);

module.exports = questionsRoute;
