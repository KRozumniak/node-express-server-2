import Book from './Model';

export default function update(req, res) {
  const bookId = req.params.bookId;

  Book.updateOne({ _id: bookId }, req.body)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      err.status(400).json('Book update by id error');
    });
}
