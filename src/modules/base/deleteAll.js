import Base from './Model';

export default function baseDeleteAll(req, res) {
  Base.deleteMany()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      err.status(400).json('Base delete error');
    });
}
