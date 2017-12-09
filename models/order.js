const mongoose = require('mongoose');
const Schema = mongoose.Schema

const cartSchema = Schema({
    product: [{
        type: Schema.Types.ObjectId, 
        ref: "Product" 
    }]
})

module.exports = mongoose.model("Cart", cartSchema)