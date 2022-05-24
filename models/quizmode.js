const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const quizSchema = new mongoose.Schema({
  QNo: {
    type: Number,
    required: true,
  },
  Question: {
    type: String,
    required: true,
  },
  /* Options: [
      {
        text: {
          type: String,
          required: true,
          maxItems: 5,
        },
      },
    ],*/
  optA: {
    type: String,
    required: true,
  },
  optB: {
    type: String,
    required: true,
  },
  optC: {
    type: String,
    required: true,
  },
  optD: {
    type: String,
   required: true,
  },
  optE: {
    type: String,
    required: false,
  },
  CorrectOption: {
    type: String,
    required: true,
  },
});

const quiz = mongoose.model("quiz", quizSchema);

module.exports = quiz;
