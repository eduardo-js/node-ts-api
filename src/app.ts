import express from 'express';
import {ErrorHandler} from './middleware/ErrorHandler';
import 'express-async-errors';
import BookRoutes from './routes/Book';
import BookService from './service/Book';
import BookRepository from './repository/Book';
import {PrismaClient} from '@prisma/client';
import BookController from './controller/Book';

const app = express();

const prisma = new PrismaClient();
const bookRepository = new BookRepository(prisma);
const bookService = new BookService(bookRepository);
const bookController = new BookController(bookService);
const bookRoutes = new BookRoutes(bookController);
app.use('/api/book', bookRoutes.router);
app.use(ErrorHandler);

export default app;
