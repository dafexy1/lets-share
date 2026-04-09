const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({

name: String,

category: String,

image: String,

description: String,

vendor: {
type: mongoose.Schema.Types.ObjectId,
ref: "Vendor"
},

priceTiers:[
{
minQty:Number,
price:Number
}
],

currentPoolQty:{
type:Number,
default:0
}

});

module.exports = mongoose.model("Product",ProductSchema);