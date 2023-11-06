var personName = "Black Smith";
var lowercaseName = personName.toLowerCase();
console.log(lowercaseName);
var uppercaseName = personName.toUpperCase();
console.log(uppercaseName);
var titlecaseName = personName.toLocaleLowerCase().replace(/\b\w/g, function (c) { return c.toUpperCase(); });
console.log(titlecaseName);
