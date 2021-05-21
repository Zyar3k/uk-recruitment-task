const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const userRoute = require("./routes/users");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Getting better... MongoDB Connected");
  })
  .catch((err) => console.log(err));

app.use("/api/users", userRoute);

app.listen(8800, () => {
  console.log("It's amazing! Server is running!");
});
