import {Request, Response, Router} from 'express';
import BookController from '../controller/Book';
import {Validate} from '../middleware/Validator';
import BookRepository from '../repository/Book';
import prisma from '../repository/Prisma';
import BookService from '../service/Book';
import {createBookParams} from '../shared/validators/Book';

const BookRouter = Router();
BookRouter.get('/v1/:id', async function(req: Request, res: Response) {
  const bookRepository = new BookRepository(prisma);
  const bookService = new BookService(bookRepository);
  return new BookController(bookService).getBookById(req, res);
});

BookRouter.post(
    '/v1',
    Validate(createBookParams),
    async function(req: Request, res: Response) {
      const bookRepository = new BookRepository(prisma);
      const bookService = new BookService(bookRepository);
      return new BookController(bookService).createBook(req, res);
    },
);

export default BookRouter;
