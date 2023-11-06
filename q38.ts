// Define the describe_city function
function describe_city(city: string, country: string = 'Default Country'): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city('Karachi', 'Pakistan'); // Custom country
describe_city('Paris'); // Default country
describe_city('New York', 'USA'); // Custom country
