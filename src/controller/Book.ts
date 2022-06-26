import {Request, Response} from 'express';
import BookService from '../service/Book';

export default class BookController {
  constructor(private readonly bookService: BookService) {}
  async getBookById(req: Request, res: Response) {
    const response = await this.bookService.getBookById(req.params.id);
    return res.status(response.status).send(response.data);
  }
  async createBook(req: Request, res: Response) {
    const response = await this.bookService.createBook(req.body);
    return res.status(response.status).send(response.data);
  }
}
