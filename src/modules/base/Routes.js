import { Router } from 'express';
import create from './create';
import getAll from './getAll';
import baseGetById from './getById';

const router = Router();

router.post('/', create); // POST localhost:5000/base
router.get('/', getAll); // GET localhost:5000/base
router.get('/:baseId', baseGetById); // GET localhost:5000/base/:

export default router;
