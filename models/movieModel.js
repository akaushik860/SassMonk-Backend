const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  createdAt:{
    type: String,
    required: true
  },
});

module.exports = mongoose.model("movies", MovieSchema);