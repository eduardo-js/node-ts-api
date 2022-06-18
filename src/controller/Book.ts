import {Request, Response} from 'express';
import {inject, injectable} from 'tsyringe';
import BookService from '../service/Book';

@injectable()
export default class BookController {
  constructor(@inject('BookService') private bookService: BookService) {}
  getBookById = async (req: Request, res: Response) => {
    const response = await this.bookService.getBookById(
        parseInt(req.params.id),
    );
    return res.status(response.status).send(response.data);
  };
}
