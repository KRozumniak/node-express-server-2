import Base from './Model';

export default function baseDeleteById(req, res) {
  const baseId = req.params.baseId;

  Base.deleteOne({ _id: baseId })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      err.status(400).json('Base delete error');
    });
}
