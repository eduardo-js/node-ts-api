import {Router} from 'express';
import {container, inject, injectable} from 'tsyringe';
import Book from './Book';

@injectable()
export default class V1 {
  constructor(@inject('router') public router: Router) {
    this.router.use('/book', container.resolve(Book).router);
  }
}
