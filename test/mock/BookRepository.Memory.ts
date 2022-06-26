import {Book} from '@prisma/client';
import {randomUUID} from 'crypto';
import {IBookRepository} from '../../src/repository/Book';
import {CreateBookParams} from '../../src/shared/validators/Book';

export class BookRepositoryMemory implements IBookRepository {
  books: Book[] = [];
  async getBookById(id: string): Promise<Book | null> {
    return this.books.find((book) => book.id === id) || null;
  }

  async createBook(data: CreateBookParams) {
    const book = {
      id: randomUUID(),
      ...data,
    };
    this.books.push(book);
    return book;
  }
  async reset() {
    this.books = [];
  }
}
