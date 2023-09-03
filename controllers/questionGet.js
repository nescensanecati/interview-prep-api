const knex = require("knex")(require("../knexfile"));


const getQuestion = (req, res) => {
    knex("questions")
      .select(
        "questions.question_id",
        "question",
        "responses.response_id as response_id",
        "responses.response AS response",
        "responses.is_correct AS is_correct",
        // "descriptions.description AS description",
      )
      .innerJoin("responses", "responses.question_id", "questions.question_id")
      // .innerJoin("descriptions", "descriptions.question_id", "questions.question_id")
      .where({ "questions.question_id": req.params.question_id })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Unable to get the inventory" });
      });
  };



module.exports = {
  getQuestion,
  };
  