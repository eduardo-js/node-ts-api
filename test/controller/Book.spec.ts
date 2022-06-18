import request from 'supertest';
import {
  ResourceNotFound,
  UnhandledException,
  ValidationError,
} from '../../src/error/Http';
import BookService from '../../src/service/Book';
import {bookMock} from '../mock/Book.mock';
import container from '../../src/shared/container';
import App from '../../src/app';

jest.mock('../../src/service/Book');

describe('BookController', () => {
  const app = container.resolve(App).app;
  const bookService = jest.mocked(BookService.prototype);
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe('getBookById', () => {
    it('should return 200 when book exists', async () => {
      const data = {book: bookMock};
      bookService.getBookById.mockResolvedValue({status: 200, data});
      const sut = await request(app).get('/api/book/v1/1');
      expect(sut.status).toBe(200);
      expect(sut.body).toStrictEqual(data);
    });
    it('should return 404 when book !exists', async () => {
      bookService.getBookById.mockResolvedValue({
        status: ResourceNotFound.status,
        data: ResourceNotFound.data,
      });
      const sut = await request(app).get('/api/book/v1/1');
      expect(sut.status).toBe(ResourceNotFound.status);
      expect(sut.body).toStrictEqual(ResourceNotFound.data);
    });
    it('should return 400 on id <= 0', async () => {
      const sut = await request(app).get('/api/book/v1/-1');
      expect(sut.status).toBe(ValidationError.status);
      expect(sut.body).toHaveProperty('name', 'ZodError');
    });
    it('should return 503 when route throw', async () => {
      bookService.getBookById.mockRejectedValue(new Error());
      const sut = await request(app).get('/api/book/v1/1');
      expect(sut.status).toBe(UnhandledException.status);
      expect(sut.body).toStrictEqual(UnhandledException.data);
    });
  });
});
