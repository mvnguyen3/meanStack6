let mongoose = require("mongoose"),
Schema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1/mernmongodb");

let newSchema = new Schema({
    name: {type:String, required:true},
    age: Number,
    education: String,
    state:Object
});

let userSchema = mongoose.model("user", newSchema);

module.exports = userSchema;


