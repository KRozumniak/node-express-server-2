import { Router } from 'express';
import create from './create';
import getAll from './getAll';
import baseGetById from './getById';
import baseUpdateById from './updateById';
import baseDeleteAll from './deleteAll';
import baseDeleteById from './deleteById';

const router = Router();

router.post('/', create); // POST localhost:5000/base
router.get('/', getAll); // GET localhost:5000/base
router.get('/:baseId', baseGetById); // GET localhost:5000/base/:baseId
router.patch('/:baseId', baseUpdateById); // PATCH localhost:5000/base/:baseId
router.delete('/', baseDeleteAll); // DELETE localhost:5000/base/
router.delete('/:baseId', baseDeleteById); // DELETE localhost:5000/base/:baseId

export default router;
