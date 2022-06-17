import {Router} from 'express';
import {inject, injectable} from 'tsyringe';
import BookRoutes from './Book';

@injectable()
export default class Routes {
  constructor(
    @inject('router') public router: Router,
    @inject('BookRoutes') private bookRoutes: BookRoutes,
  ) {
    this.router.use('/book', this.bookRoutes.router);
  }
}
