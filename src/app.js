"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const router = express.Router();

// Conectar ao banco
mongoose.connect(
  "mongodb+srv://falaaibonita:falaaibonita@cluster0.zu0s2tm.mongodb.net/"
);

// Carregar os Models
const Product = require("./models/product");
const Customer = require("./models/customer");
const Order = require("./models/order");

// Carregar as rotas
const indexRoute = require("./routes/indexRoute");
const productRoute = require("./routes/productRoute");
const customerRoute = require("./routes/customer-route");
const orderRoute = require("./routes/order-route");

app.use(
  bodyParser.json({
    limit: "5mb",
  })
);
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// Habilita o CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-access-token"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use("/", indexRoute);
app.use("/products", productRoute);
app.use("/customers", customerRoute);
app.use("/orders", orderRoute);

module.exports = app;
