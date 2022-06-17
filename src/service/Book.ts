import {inject, injectable} from 'tsyringe';
import {ResourceNotFound} from '../error/Http';
import BookRepository from '../repository/Book';
import ApiResponse from '../shared/responses';

@injectable()
export default class BookService {
  constructor(
    @inject('BookRepository') private bookRepository: BookRepository,
  ) {}
  async getBookById(id: number) {
    const book = await this.bookRepository.getBookById(id);
    if (!book) {
      return ApiResponse(ResourceNotFound.status, ResourceNotFound.data);
    }
    return ApiResponse(200, {book});
  }
}
