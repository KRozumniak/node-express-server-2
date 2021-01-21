import { Router } from 'express';
import create from './create';
import search from './search';
import getById from './getById';
import update from './update';
import deleteAll from './deleteAll';
import deleteById from './deleteById';

const router = Router();

router.post('/', create); // POST localhost:5000/base
router.post('/search', search); // POST localhost:5000/base/search
router.get('/:baseId', getById); // GET localhost:5000/base/:baseId
router.patch('/:baseId', update); // PATCH localhost:5000/base/:baseId
router.delete('/', deleteAll); // DELETE localhost:5000/base/
router.delete('/:baseId', deleteById); // DELETE localhost:5000/base/:baseId

export default router;