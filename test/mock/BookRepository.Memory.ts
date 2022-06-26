import {Book} from '@prisma/client';
import {IBookRepository} from '../../src/repository/Book';

export class BookRepositoryMemory implements IBookRepository {
  books: Book[] = [];
  async getBookById(id: string): Promise<Book | null> {
    return this.books.find((book) => book.id === id) || null;
  }

  async createBook(book: Book) {
    this.books.push(book);
  }
  async reset() {
    this.books = [];
  }
}
