import Book from './Model';

export default function getById(req, res) {
  const bookId = req.params.bookId;

  Book.findById(bookId)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      err.status(400).json('Book get by id error');
    });
}
