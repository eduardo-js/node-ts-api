import {Router} from 'express';
import {inject, injectable} from 'tsyringe';
import BookController from '../controller/Book';
import {Validate} from '../middleware/Validator';
import {getBookByIdParam} from '../shared/validators/Book';

@injectable()
export default class BookRoutes {
  constructor(
    @inject('router') public router: Router,
    @inject('BookController') private bookController: BookController,
  ) {
    this.init();
  }

  init() {
    this.router.get(
        '/v1/:id',
        Validate(getBookByIdParam),
        this.bookController.getBookById,
    );
  }
}
