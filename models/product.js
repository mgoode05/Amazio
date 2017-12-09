const mongoose = require('mongoose');
const Schema = mongoose.Schema

const productSchem = Schema({
    name: String,
    sku: String,
    description: String,
    price: Number
});

module.exports = mongoose.model("Product", productSchem)