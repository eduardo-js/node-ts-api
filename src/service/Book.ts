import {ResourceNotFound} from '../error/Http';
import BookRepository from '../repository/Book';
import ApiResponse from '../shared/responses';

export default class BookService {
  constructor(private readonly bookRepository: BookRepository) {}
  async getBookById(id: string) {
    const book = await this.bookRepository.getBookById(id);
    if (!book) {
      return ApiResponse(ResourceNotFound.status, ResourceNotFound.data);
    }
    return ApiResponse(200, {book});
  }
}
