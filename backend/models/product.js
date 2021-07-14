const mongoose = require('mongoose');

// this is our Schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    countInStock: {
        type: Number,
        required:true
    },

    picUrl: {
        type: String,
        required: true
    }
})

// this is our Model
const Product = mongoose.model('product',productSchema);

module.exports = Product;