const mongoose = require("mongoose");
const { Schema } = mongoose

const ContactusSchema = new Schema({
    "fName": {type : String},
    "lName": {type : String},
    "email": {type : String},
    "description": {type : String}
})


const Model = mongoose.model("contactusData", ContactusSchema, "contactusData")

module.exports = Model;