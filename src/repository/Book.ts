import {Book, PrismaClient} from '@prisma/client';

export default class BookRepository {
  constructor(private readonly prisma: PrismaClient) {}
  async getBookById(id: string): Promise<Book | null> {
    return await this.prisma.book.findUnique({
      where: {
        id: id,
      },
    });
  }
}
