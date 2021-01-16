import Base from './Model';

export default function baseUpdateById(req, res) {
  const baseId = req.params.baseId;

  delete req.body.password;

  Base.updateOne({ _id: baseId }, req.body)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      err.status(400).json('Base update by id error');
    });
}
