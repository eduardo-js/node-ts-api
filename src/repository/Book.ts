import {Book, PrismaClient} from '@prisma/client';
import {CreateBookParams} from '../shared/validators/Book';

export type IBookRepository = {
  getBookById(id: string): Promise<Book | null>;
  createBook(data: CreateBookParams): Promise<Book>;
};
export default class BookRepository implements IBookRepository {
  constructor(private readonly prisma: PrismaClient) {}
  async getBookById(id: string): Promise<Book | null> {
    return await this.prisma.book.findUnique({
      where: {
        id: id,
      },
    });
  }
  async createBook(data: CreateBookParams): Promise<Book> {
    return await this.prisma.book.create({
      data,
    });
  }
}
