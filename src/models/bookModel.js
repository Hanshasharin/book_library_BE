const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  author: { type: String, required: true },
  rating: { type: Number, required: true },
  year: { type: Number, required: true },
});
const bookModel = mongoose.model('book' , bookSchema)
module.exports= bookModel