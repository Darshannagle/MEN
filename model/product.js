
const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter title'],


    },
    price: {
        type: Number,
        default: 0,
        required: [true, 'Please enter title'],
    },
    stock: {
        type: Number,
        default: 0,
        required: [true, 'Please enter stock'],
    }
}, {
    timestamps: true
});
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product; 