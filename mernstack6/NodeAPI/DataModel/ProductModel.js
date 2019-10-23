let mongoose = require("mongoose"),
Schema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1/mernmongodb");

let newSchema = new Schema({
    productName: {type:String, require:true},
    pDescription: String,
    pPrice: String,
    pRating: String
});

// let newSchema = new Schema(
//     {
//         userid: String,
//         products: Object
//     });

let productSchema = mongoose.model("product", newSchema);

module.exports = productSchema;