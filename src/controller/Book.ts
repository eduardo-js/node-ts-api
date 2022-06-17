import {Request, Response} from 'express';
import {inject, injectable} from 'tsyringe';
import BookService from '../service/Book';

@injectable()
export default class BookController {
  constructor(@inject('BookService') private BookService: BookService) {}

  getBookById = async (req: Request, res: Response) => {
    const data = await this.BookService.getBookById(req.params.id as string);
    res.send(data);
  };
}
