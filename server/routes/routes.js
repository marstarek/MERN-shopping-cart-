const express = require("express");
const product = require("../models/productModel");
const router = express.Router();
router.get("/api/products", async(req, res) => {
    const products = await product.find();
    res.send(products);
});
router.post("/api/products", async(req, res) => {
    const newproduct = new product(req.body);
    const savep = await newproduct.save();
    res.send(savep);
});
router.delete("/api/products/:id", async(req, res) => {
    const deletedproduct = await product.findByIdAndDelete(res.params.id);
    res.send(deletedproduct);
});
module.exports = router;