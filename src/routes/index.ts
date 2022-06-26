import {Router} from 'express';
import BookRouter from './Book';

const Routes = Router();
Routes.use('/api/book', BookRouter);

export default Routes;
