import {Book, PrismaClient} from '@prisma/client';
import {inject, injectable} from 'tsyringe';

@injectable()
export default class BookRepository {
  constructor(@inject('PrismaClient') private prisma: PrismaClient) {}
  async getBookById(id: number): Promise<Book | null> {
    return await this.prisma.book.findUnique({
      where: {
        id: id,
      },
    });
  }
}
