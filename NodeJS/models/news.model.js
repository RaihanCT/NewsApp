const mongoose = require("mongoose");
const { Schema } = mongoose

const newsSchema = new Schema({
    "id": Number,
    "title": String,
    "description": String,
    "url": String,
    "imageUrl": String,
    "publishedAt" : Date,
    "category": String
})

newsSchema.plugin(autoIncrement.plugin, {model : 'news', field: 'id'})

const Model = mongoose.model("news", newsSchema, "news")

module.exports = Model;