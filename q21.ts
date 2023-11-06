// Define a TypeScript object for a book
type Book = {
    title: string;
    author: string;
    genre: string;
    publicationYear: number;
};

// Create an array of book objects
const books: Book[] = [
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
for (let i = 0; i < books.length; i++) {
    const book = books[i];
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Genre: ${book.genre}`);
    console.log(`Publication Year: ${book.publicationYear}`);
    console.log("--------------------");
}
