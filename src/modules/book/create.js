import mongoose from 'mongoose';
import Book from './Model';
import Author from './../author/Model';

export default function create(req, res) {
  const _id = new mongoose.Types.ObjectId();
  const newBook = new Book({
    _id,
    name: req.body.name,
    // author: req.body.author,
  });

  // Update authors

  // console.log(req.body.author);

  // req.body.author.forEach((author) => {
  //   Author.findById(author)
  //     .exec()
  //     .then((doc) => {
  //       doc.book = [...doc.book, _id];
  //       doc.save().catch((e) => {
  //         throw new Error(e);
  //       });
  //
  //       //res.status(200).json(result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       err.status(400).json('Author update by id error');
  //     });
  // });

  // Create book
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
