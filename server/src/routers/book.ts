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
  const { page, name, genre } = req.query;

  const filter: any = {};
  if (name) {
    filter.name = new RegExp(name as string, 'i');
  }
  if (genre) {
    filter.genre = new RegExp(genre as string, 'i');
  }

  const pageFormatted = parseInt(page as string);
  const skip = pageFormatted > 1 ? (pageFormatted - 1) * limit : 0;

  try {
    const numOfBooks = await Book.find(filter).countDocuments();
    const books = await Book.find(filter).skip(skip).limit(limit);
    const genres = await Book.distinct("genre");

    res.send({
      items: books,
      genres,
      pageCount: Math.ceil(numOfBooks / limit),
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
