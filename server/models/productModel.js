const mongoose = require("mongoose");
const productSchema = require("../schema/productSchema");

const product = mongoose.model("product", productSchema);
module.exports = product;