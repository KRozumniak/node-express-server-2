import Author from './Model';
import Book from '../book/Model';

export default async function create(req, res) {
  const books = req.body.books;

  const promisesBookGetById = books.map((book) =>
    Book.findById(book)
      .exec()
      .then((result) => result)
      .catch((err) => {
        console.log(err);
        // err.status(400).json('Book search error');
      }),
  );

  console.log(promisesBookGetById);

  const promiseResults = await Promise.all(promisesBookGetById);

  console.log(promiseResults);

  // Check books
  // const bookGetByIdResult = await Book.findById(book)
  //   .exec()
  //   .then((result) => result)
  //   .catch((err) => {
  //     console.log(err);
  //     // err.status(400).json('Book search error');
  //   });
  // console.log(bookGetByIdResult);

  const newAuthor = new Author({
    name: req.body.name,
  });

  newAuthor
    .save()
    .then(() => {
      res.status(200).json('Author created');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Author not created');
    });
}
