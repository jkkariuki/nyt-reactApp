const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  _id: {type: Schema.ObjectId},
  name: { type: String, required: true },
  url: {type: String, required: true},
  date: { type: String, required: true },
  isSaved: {type: Boolean, default: false}
})

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;