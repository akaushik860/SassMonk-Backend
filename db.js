const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://akaushik860:CKIv8lZ2oZJ5IH3P@cluster0.t7qmbzm.mongodb.net/";

const connectToMongo = async () => {
  await mongoose.connect(mongoURI);
  console.log("Connected to MongoDB");
};

module.exports = connectToMongo;