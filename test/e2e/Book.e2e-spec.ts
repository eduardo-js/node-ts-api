import request from 'supertest';
import {
  ResourceNotFound,
  UnhandledException,
  ValidationError,
} from '../../src/error/Http';
import {bookMock} from '../mock/Book.mock';
import {PrismaClient} from '@prisma/client';
import app from '../../src/app';

describe('Book', () => {
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
  });
  describe('createBook', () => {
    it('should return 200 when book was created', async () => {
      const book = {
        title: 'yep',
        description: 'yeperino',
        author: 'yeper',
      };
      const sut = await request(app).post('/api/book/v1').send(book);
      expect(sut.status).toBe(200);
      expect(sut.body.book).toHaveProperty('id');
      expect(sut.body.book).toHaveProperty('title', book.title);
      expect(sut.body.book).toHaveProperty('description', book.description);
      expect(sut.body.book).toHaveProperty('author', book.author);
    });
    it('should return 503 when book.id is not unique', async () => {
      const data = {
        title: 'yep',
        description: 'yeperino',
        author: 'yeper',
      };
      const book = await prisma.book.create({data});
      const sut = await request(app).post('/api/book/v1').send(book);
      console.log(sut);
      expect(sut.status).toBe(UnhandledException.status);
    });
    it('should return 400 on invalid params', async () => {
      const sut = await request(app).post('/api/book/v1');
      expect(sut.status).toBe(ValidationError.status);
      expect(sut.body).toHaveProperty('name', 'ZodError');
    });
  });
});
