const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

require("dotenv").config();
const port = process.env.PORT;
const { mongo_url } = require("./config/config");
const userRouter = require("./routes/userRoutes");
const productsRouter = require("./routes/productsRoutes");

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", userRouter);
app.use("/api/products", productsRouter);

mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("database is connected");
    app.listen(port, () => console.log(`Server is running on port : ${port}`));
  })
  .catch((err) => console.log(err.message));
