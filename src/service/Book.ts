import {ResourceNotFound} from '../error/Http';
import {IBookRepository} from '../repository/Book';
import ApiResponse from '../shared/responses';

export default class BookService {
  constructor(private readonly bookRepository: IBookRepository) {}
  async getBookById(id: string) {
    const book = await this.bookRepository.getBookById(id);
    if (!book) return ResourceNotFound;
    return ApiResponse(200, {book});
  }
}
