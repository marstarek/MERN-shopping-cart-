const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const product = require("../server/models/productModel");
const router = require("./routes/routes");

const app = express();
app.use(bodyParser.json());
app.use("/", router);
const connectionString = "mongodb://localhost/react-shopping-cart";
mongoose
    .connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((res) => console.log("connection done"));

app.listen(5001, () => {
    console.log("running on 5001");
});