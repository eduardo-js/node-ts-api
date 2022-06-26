import {Book, PrismaClient} from '@prisma/client';

export type IBookRepository = {
  getBookById(id: string): Promise<Book | null>;
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
}
