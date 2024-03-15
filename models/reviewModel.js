const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  movieId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'movie'
  },
  name:{
    type: String,
    required: true
  },
  comment:{
    type: String,
    required: true
  },
  rating:{
    type: String,
    default: "General"
  },
  createdAt:{
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model("reviews", ReviewSchema);