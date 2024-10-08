const mongoose = require("mongoose");

const Book_Scehma = mongoose.Schema(
  {
    title: String,
    author: String,
    category: String,
    publicationYear: Number,
    price: Number,
    quantity: Number,
    description: String,
    imageUrl: String,
  },
  { timestamps: true }
);

const BookModel = mongoose.model("Book", Book_Scehma);

module.exports = BookModel;
