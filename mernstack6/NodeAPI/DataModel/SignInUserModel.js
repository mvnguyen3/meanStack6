let mongoose = require("mongoose"); // need a connection creator and which also provides helper method

mongoose.connect('mongodb://127.0.0.1/mernmongodb'); // create update and connect with smarttrainees

let Schema = mongoose.Schema; //

let NewSchema = new Schema(
    { 
        firstName: {type: String, required: true}, 
        password: String,
        street: String,
        cellPhone: String
        //SchoolName: Object//{type: String, required: true} //MandatoryField        
    }); //JSON - BSON (Binary JSON)

let SignInUserSchema = mongoose.model('signuser', NewSchema);

module.exports = SignInUserSchema;