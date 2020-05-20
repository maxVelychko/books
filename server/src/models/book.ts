import mongoose from 'mongoose';

const Book = mongoose.model('Book', {
  name: String,
  genre: String,
  date: String,
  image: String,
  author: {
    name: String,
    gender: String,
  }
});

export default Book;
