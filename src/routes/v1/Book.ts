import {Router} from 'express';
import {inject, injectable} from 'tsyringe';

@injectable()
export default class Book {
  constructor(@inject('router') public router: Router) {
    this.init();
  }

  init() {
    this.router.get('/', (req, res) => {
      res.send('Hello Book!');
    });
  }
}
