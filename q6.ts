// Store a person's name with whitespace characters
const personNameWithWhitespace: string = '\t   John Doe \n';

// Print the name with whitespace
console.log(`Name with whitespace: "${personNameWithWhitespace}"`);

// Strip whitespaces from the name
const strippedPersonName: string = personNameWithWhitespace.trim();

// Print the name after stripping whitespaces
console.log(`Stripped name: "${strippedPersonName}"`);
