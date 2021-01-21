import Author from './Model';

export default function update(req, res) {
  const authorId = req.params.authorId;

  Author.updateOne({ _id: authorId }, req.body)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      err.status(400).json('Author update by id error');
    });
}
