interface Book {
    name: string;
    isbn: string;
}

const book: Book = {
    name: "Книга",
    isbn: "1234567890"
}

const content = document.getElementById("content");

if (content) {
    content.textContent = "Название книги: " + book.name;
}