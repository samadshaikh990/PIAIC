// Store a person's name with whitespace characters
var personNameWithWhitespace = '\t   John Doe \n';
// Print the name with whitespace
console.log("Name with whitespace: \"".concat(personNameWithWhitespace, "\""));
// Strip whitespaces from the name
var strippedPersonName = personNameWithWhitespace.trim();
// Print the name after stripping whitespaces
console.log("Stripped name: \"".concat(strippedPersonName, "\""));
