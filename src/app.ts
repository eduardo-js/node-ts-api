import express, {Application} from 'express';
import {inject, injectable} from 'tsyringe';
import Routes from './routes/index';

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
  };
}
