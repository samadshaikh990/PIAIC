class FamousQuote {
    private author: string;
    private quote: string;

    constructor(author: string, quote: string) {
        this.author = author;
        this.quote = quote;
    }

    public printQuote(): void {
        console.log(`${this.author} once said, "${this.quote}"`);
    }
}

// Example usage
const albertEinsteinQuote = new FamousQuote(
    'Albert Einstein',
    'A person who never made a mistake never tried anything new.'
);

albertEinsteinQuote.printQuote();
