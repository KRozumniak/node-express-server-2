import Base from './Model';

export default function search(req, res) {
  Base.find()
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      err.status(400).json('Base search error');
    });
}
