import {container} from 'tsyringe';
import express, {Application, Router} from 'express';
import App from '../../app';
import Routes from '../../routes';
import BookRoutes from '../../routes/Book';
import BookService from '../../service/Book';
import BookController from '../../controller/Book';

container.register<Application>('app', {
  useValue: express(),
});
container.register<Router>('router', {
  useValue: Router(),
});
container.register<Routes>('Routes', {
  useClass: Routes,
});

container.register<App>('App', {
  useClass: App,
});

container.register<BookRoutes>('BookRoutes', {
  useClass: BookRoutes,
});

container.register<BookController>('BookController', {
  useClass: BookController,
});
container.register<BookService>('BookService', {
  useClass: BookService,
});

export default container;
