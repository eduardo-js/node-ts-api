export default class BookService {
  async getBookById(id: string): Promise<Record<string, any>> {
    return {book: `book${id}`};
  }
}
