import {Router} from 'express';
import {container, inject, injectable} from 'tsyringe';
import V1 from './v1/index';

@injectable()
export default class Routes {
  constructor(@inject('router') public router: Router) {
    this.router.use('/v1', container.resolve(V1).router);
  }
}
