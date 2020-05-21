import { Router } from 'express';

import Book from '../models/book';

const router = Router();

router.post('/api/books', async (req, res) => {
  const book = new Book(req.body);

  try {
    await book.save();
    res.status(201).send(book);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/api/books', async (_req, res) => {
  try {
    const books = await Book.find({});
    res.send(books);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
