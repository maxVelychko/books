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

const limit = 10;
router.get('/api/books', async (req, res) => {
  // @ts-ignore
  const page = parseInt(req.query.page);
  const skip = page > 1 ? (page - 1) * limit : 0;

  try {
    const books = await Book.find({}).skip(skip).limit(limit);
    res.send(books);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
