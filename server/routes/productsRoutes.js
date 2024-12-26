const express = require("express");
const { getProducts } = require("../controllers/productsController");
const productsRouter = express.Router();

productsRouter.get("/", getProducts);

module.exports = productsRouter;
