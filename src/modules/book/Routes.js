import { Router } from 'express';
import create from './create';
import search from './search';
import getById from './getById';
import update from './update';
import deleteAll from './deleteAll';
import deleteById from './deleteById';

const router = Router();

router.post('/', create); // POST localhost:5000/book
router.post('/search', search); // POST localhost:5000/book/search
router.get('/:bookId', getById); // GET localhost:5000/book/:bookId
router.patch('/:bookId', update); // PATCH localhost:5000/book/:bookId
router.delete('/', deleteAll); // DELETE localhost:5000/book/
router.delete('/:bookId', deleteById); // DELETE localhost:5000/book/:bookId

export default router;