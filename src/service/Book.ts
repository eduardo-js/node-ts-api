import {ResourceNotFound} from '../error/Http';
import {IBookRepository} from '../repository/Book';
import ApiResponse from '../shared/responses';
import {CreateBookParams} from '../shared/validators/Book';

export default class BookService {
  constructor(private readonly bookRepository: IBookRepository) {}
  async getBookById(id: string) {
    const book = await this.bookRepository.getBookById(id);
    if (!book) return ResourceNotFound;
    return ApiResponse(200, {book});
  }
  async createBook(bookParams: CreateBookParams) {
    const book = await this.bookRepository.createBook(bookParams);
    return ApiResponse(200, {book});
  }
}
