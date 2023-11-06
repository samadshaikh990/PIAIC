// Define the city_country function
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with three city-country pairs and print the returned values
let result1 = city_country('Lahore', 'Pakistan');
let result2 = city_country('Tokyo', 'Japan');
let result3 = city_country('Sydney', 'Australia');

console.log(result1);
console.log(result2);
console.log(result3);
