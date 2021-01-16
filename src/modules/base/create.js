import Base from './Model';

export default function create(req, res) {
  const newBase = new Base({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
  });

  newBase
    .save()
    .then(() => {
      res.status(200).json('Base created');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Base not created');
    });
}
