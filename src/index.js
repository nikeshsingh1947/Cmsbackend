
const express = require("express");
const cors = require("cors");
const usersController = require("./controller/user.controller");

const { adminregister, adminlogin } = require("./controller/admin.controller");
const PaymentRoute = require("./Route/PaymentRoute");
require("dotenv").config();
const app = express();

// Use CORS middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/users", usersController);
app.post("/adminregister", adminregister);
app.post("/adminlogin", adminlogin);
app.use("/api", PaymentRoute);

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);

module.exports = app;