import request from 'supertest';
import {ResourceNotFound, ValidationError} from '../../src/error/Http';
import {bookMock} from '../mock/Book.mock';
import container from '../../src/shared/container';
import App from '../../src/app';
import {PrismaClient} from '@prisma/client';

describe('Book', () => {
  const app = container.resolve(App).app;
  const prisma = new PrismaClient();
  afterEach(async () => {
    await prisma.book.deleteMany({});
    jest.clearAllMocks();
  });
  describe('getBookById', () => {
    it('should return 200 when book exists', async () => {
      await prisma.book.create({data: bookMock});
      const sut = await request(app).get('/api/book/v1/1');
      expect(sut.status).toBe(200);
      expect(sut.body).toStrictEqual({book: bookMock});
    });
    it('should return 404 when book !exists', async () => {
      const sut = await request(app).get('/api/book/v1/1');
      expect(sut.status).toBe(ResourceNotFound.status);
      expect(sut.body).toStrictEqual(ResourceNotFound.data);
    });
    it('should return 400 on id <= 0', async () => {
      const sut = await request(app).get('/api/book/v1/-1');
      expect(sut.status).toBe(ValidationError.status);
      expect(sut.body).toHaveProperty('name', 'ZodError');
    });
  });
});
