// Create an array of book objects
var books = [
    {
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        genre: 'Fiction',
        publicationYear: 1951
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        genre: 'Fiction',
        publicationYear: 1960
    },
    {
        title: '1984',
        author: 'George Orwell',
        genre: 'Dystopian',
        publicationYear: 1949
    }
];
// Print information about each book
console.log("List of Books:");
for (var i = 0; i < books.length; i++) {
    var book = books[i];
    console.log("Title: ".concat(book.title));
    console.log("Author: ".concat(book.author));
    console.log("Genre: ".concat(book.genre));
    console.log("Publication Year: ".concat(book.publicationYear));
    console.log("--------------------");
}
