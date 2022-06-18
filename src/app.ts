import express, {Application} from 'express';
import {inject, injectable} from 'tsyringe';
import {ErrorHandler} from './middleware/ErrorHandler';
import Routes from './routes/index';
import 'express-async-errors';
@injectable()
export default class App {
  constructor(
    @inject('app') public app: Application,
    @inject('Routes') private routes: Routes,
  ) {
    this.init();
  }

  init = () => {
    this.app.use(express.json());
    this.app.use('/api', this.routes.router);
    this.app.use(ErrorHandler);
  };
}
