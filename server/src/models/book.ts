import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  name: String,
  genre: String,
  date: String,
  image: String,
  author: {
    name: String,
    gender: String,
  },
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
