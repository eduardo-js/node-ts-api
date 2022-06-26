import {Router} from 'express';
import BookController from '../controller/Book';
import {Validate} from '../middleware/Validator';
import {getBookByIdParam} from '../shared/validators/Book';

export default class BookRoutes {
  router = Router();
  constructor(private readonly bookController: BookController) {
    this.router.get(
        '/v1/:id',
        Validate(getBookByIdParam),
        this.bookController.getBookById,
    );
  }
}
