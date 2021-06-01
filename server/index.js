const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const userRoute = require("./routes/users");
const config = require("./config");

dotenv.config();
app.use(cors());
app.use(express.json());

mongoose
  .connect(config.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Getting better... MongoDB Connected");
  })
  .catch((err) => console.log(err));

app.use("/api/users", userRoute);

app.listen(config.PORT, () => {
  console.log("It's amazing! Server is running!");
});

mongoose.set("useFindAndModify", false);
