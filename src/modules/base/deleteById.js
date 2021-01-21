import Base from './Model';

export default function deleteById(req, res) {
  const baseId = req.params.baseId;
  // const { baseId } = req.params;

  console.log(res);

  Base.deleteOne({ _id: baseId })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      err.status(400).json('Base delete error');
    });
}
