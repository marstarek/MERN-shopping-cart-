const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id: String,
    tittle: String,
    imageUrl: String,
    desc: String,
    price: Number,
    sizes: [String],
});
module.exports = productSchema;