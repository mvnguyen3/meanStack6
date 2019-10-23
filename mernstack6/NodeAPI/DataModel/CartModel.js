let mongoose = require("mongoose"); // need a connection creator and which also provides helper method

mongoose.connect('mongodb://127.0.0.1/mernmongodb'); // create update and connect with smarttrainees

let Schema = mongoose.Schema; //

let NewSchema = new Schema(
    { 
        userid: String,
        cart : Object
    });

let CartSchema = mongoose.model('cart', NewSchema);

module.exports = CartSchema;