import {Router} from 'express';
import {inject, injectable} from 'tsyringe';
import BookController from '../controller/Book';

@injectable()
export default class BookRoutes {
  constructor(
    @inject('router') public router: Router,
    @inject('BookController') private bookController: BookController,
  ) {
    this.init();
  }

  init() {
    this.router.get('/:id', this.bookController.getBookById);
  }
}
