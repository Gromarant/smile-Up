const express = require("express");
const listsRouter = express.Router();
// const listsController = require("../controllers/");

listsRouter.get("/lists", () => console.log("all lists route"));