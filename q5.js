var FamousQuote = /** @class */ (function () {
    function FamousQuote(author, quote) {
        this.author = author;
        this.quote = quote;
    }
    FamousQuote.prototype.composeMessage = function () {
        return "".concat(this.author, " once said, \"").concat(this.quote, "\"");
    };
    return FamousQuote;
}());
// Store famous person's name in a variable
var famous_person = 'Albert Einstein';
// Create an instance of FamousQuote
var albertEinsteinQuote = new FamousQuote(famous_person, 'A person who never made a mistake never tried anything new.');
// Compose and store the message in a variable
var message = albertEinsteinQuote.composeMessage();
// Print the message
console.log(message);
