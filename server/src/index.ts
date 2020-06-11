import express from 'express';
import path from 'path';

import connectToDB from './db/mongoose';
import bookRouter from './routers/book';

const port = process.env.PORT || 3001;

const app = express();
connectToDB();

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.json());
app.use(bookRouter);

// @ts-ignore
app.listen(port, error => {
  if (error) {
    return console.error(error);
  }
  return console.log(`server is listening on ${port}`);
});
