import Book from './Model';

export default function create(req, res) {
  const newBook = new Book({
    name: req.body.name,
    author: req.body.author,
  });


  newBook
    .save()
    .then(() => {
      res.status(200).json('Book created');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Book not created');
    });
}
