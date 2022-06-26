import {ResourceNotFound} from '../../src/error/Http';
import BookRepository from '../../src/repository/Book';
import BookService from '../../src/service/Book';
import {bookMock} from '../mock/Book.mock';

jest.mock('../../src/repository/Book');
describe('BookService', () => {
  const bookRepository = jest.mocked(BookRepository.prototype);
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe('getBookById', () => {
    it('should return 200 when book exists', async () => {
      bookRepository.getBookById.mockResolvedValueOnce(bookMock);
      const sut = await new BookService(bookRepository).getBookById('1');
      expect(sut.status).toBe(200);
      expect(sut.data).toStrictEqual({book: bookMock});
    });
    it('should return 404 when book !exists', async () => {
      bookRepository.getBookById.mockResolvedValueOnce(null);
      const sut = await new BookService(bookRepository).getBookById('1');
      expect(sut.status).toBe(ResourceNotFound.status);
      expect(sut.data).toStrictEqual(ResourceNotFound.data);
    });
  });
});
