interface Book {
    title: string;
    id: string | undefined;
    description: string | undefined;
    authors: string | undefined;
    favotire: number | undefined;
    fileCover: string | undefined;
    filePath: string | undefined;
    fileBook: string | undefined;
}

abstract class BooksRepository {
    abstract createBook(book: Book) : string | false;
    abstract updateBook(book: Book) : boolean;
    abstract deleteBook(id: string) : boolean;

    abstract getBook(id: string) : Book;
    abstract getBooks(): Array<Book>;
}