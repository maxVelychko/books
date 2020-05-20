import express from 'express';

import connectToDB from './db/mongoose';
import Book from './models/book';

const port = process.env.PORT || 3001;

connectToDB();
const app = express();

app.use(express.json());

app.post('/api/books', (req, res) => {
  const book = new Book(req.body);

  book.save().then(() => {
    res.status(201).send(book);
  }).catch(error => {
    res.status(400).send(error);
  })
});

app.get('/api/books', (_req, res) => {
  Book.find({}).then(books => {
    res.send(books);
  }).catch(error => {
    res.status(500).send(error);
  })
});

// @ts-ignore
app.listen(port, error => {
  if (error) {
    return console.error(error);
  }
  return console.log(`server is listening on ${port}`);
});
