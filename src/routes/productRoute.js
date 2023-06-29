"use strict";

const express = require("express");
const router = express.Router();
const controller = require("../controllers/product-controller");

router.get("/", controller.get);
router.get("/:slug", controller.getBySlug);
router.get("/admin/:id", controller.getById); // Corrigido o nome da função
router.get("/tags/:tag", controller.getByTag);
router.post("/", controller.create); // Corrigido o nome da função
router.put("/:id", controller.update); // Corrigido o nome da função
router.delete("/:id", controller.delete);
module.exports = router;
