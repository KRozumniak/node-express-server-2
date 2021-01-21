import { Router } from 'express';
import create from './create';
import search from './search';
import getById from './getById';
import update from './update';
import deleteAll from './deleteAll';
import deleteById from './deleteById';

const router = Router();

router.post('/', create); // POST localhost:5000/author
router.post('/search', search); // POST localhost:5000/author/search
router.get('/:authorId', getById); // GET localhost:5000/author/:authorId
router.patch('/:authorId', update); // PATCH localhost:5000/author/:authorId
router.delete('/', deleteAll); // DELETE localhost:5000/author/
router.delete('/:authorId', deleteById); // DELETE localhost:5000/author/:authorId

export default router;