// Define the describe_city function
function describe_city(city, country) {
    if (country === void 0) { country = 'Default Country'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for three different cities
describe_city('Karachi', 'Pakistan'); // Custom country
describe_city('Paris'); // Default country
describe_city('New York', 'USA'); // Custom country
