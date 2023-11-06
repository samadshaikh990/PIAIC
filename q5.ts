class FamousQuote {
    private author: string;
    private quote: string;

    constructor(author: string, quote: string) {
        this.author = author;
        this.quote = quote;
    }

    public composeMessage(): string {
        return `${this.author} once said, "${this.quote}"`;
    }
}

// Store famous person's name in a variable
const famous_person: string = 'Albert Einstein';

// Create an instance of FamousQuote
const albertEinsteinQuote = new FamousQuote(
    famous_person,
    'A person who never made a mistake never tried anything new.'
);

// Compose and store the message in a variable
const message: string = albertEinsteinQuote.composeMessage();

// Print the message
console.log(message);
