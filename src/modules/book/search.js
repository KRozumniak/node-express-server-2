import Book from './Model';

export default function search(req, res) {
  Book.find()
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      err.status(400).json('Book search error');
    });
}