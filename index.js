const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors")
connectToMongo();
const app = express()
const port = 3000

app.use(cors());
app.use(express.json());

// Available Routes
app.use("/api/movies", require("./routes/movies"))
app.use("/api/reviews", require("./routes/reviews"))

app.listen(port, () => {
  console.log(`SalesMonk backend listening on port ${port}`)
})