import {ResourceNotFound} from '../../src/error/Http';
import BookService from '../../src/service/Book';
import {bookMock} from '../mock/Book.mock';
import {BookRepositoryMemory} from '../mock/BookRepository.Memory';

describe('BookService', () => {
  const bookRepository = new BookRepositoryMemory();
  afterEach(() => {
    bookRepository.reset();
  });
  describe('getBookById', () => {
    it('should return 200 when book exists', async () => {
      bookRepository.createBook(bookMock);
      const sut = await new BookService(bookRepository).getBookById('1');
      expect(sut.status).toBe(200);
      expect(sut.data).toStrictEqual({book: bookMock});
    });
    it('should return 404 when book !exists', async () => {
      const sut = await new BookService(bookRepository).getBookById('1');
      expect(sut.status).toBe(ResourceNotFound.status);
      expect(sut.data).toStrictEqual(ResourceNotFound.data);
    });
  });
});
