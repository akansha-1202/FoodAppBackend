const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const Router = require("./Routes/route");
const cors = require("cors");
const connectDB = require("./config/db");
// const addProducts = require("./addProducts");
const app = express();

//configure env
dotenv.config();

//database config
connectDB();

//middlewares
app.use(
  cors({
    origin: "*",
  })
);

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   // Additional CORS headers and options can be set here as needed
//   next();
// });

app.use(express.json());
app.use("/api", Router);

app.get("/", (req, res) => {
  res.send("Welcome To my Backend...!!!");
});

//PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  try {
    console.log(`Server is running successfully on PORT ${PORT}`.bgCyan.white);
  } catch (err) {
    console.log(err, "Error occured in running the server");
  }
});
