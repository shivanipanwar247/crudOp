const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart");
router.post("/", cartController.addToCart);
router.get("/:userId", cartController.getCart);
router.delete("/", cartController.removeCart);

module.exports = router;
