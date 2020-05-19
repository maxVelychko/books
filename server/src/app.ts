import express from 'express';

const app = express();
const port = process.env.PORT || 3001;

const data = [
  {
    name: "Handmade Cotton Car",
    genre: "Art",
    date: "2019-04-27T16:50:47.095Z",
    image: "https://picsum.photos/460/640",
      author:{
        name: "Miss Jackie Gutkowski",
        gender: "female"
      }
  },
];

app.get('/api/books', (req, res) => {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
});

// @ts-ignore
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
