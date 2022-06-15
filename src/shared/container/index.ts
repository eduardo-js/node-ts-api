import {container} from 'tsyringe';
import express, {Application, Router} from 'express';
import App from '../../app';
import Routes from '../../routes';
import V1 from '../../routes/v1';
import Book from '../../routes/v1/Book';

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

container.register<V1>('V1', {
  useClass: V1,
});

container.register<Book>('Book', {
  useClass: Book,
});

export default container;
