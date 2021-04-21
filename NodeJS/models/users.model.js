const mongoose = require("mongoose");
const { Schema } = mongoose

const UserSchema = new Schema({
    "id": Number,
    "name": {type : String, require : true},
    "email": {type : String, require : true},
    "password": {type : String, require : true}
})

UserSchema.plugin(autoIncrement.plugin, { model: 'users', field: 'id' });

const Model = mongoose.model("users", UserSchema, "users")

module.exports = Model;