// Array of usernames
let usernames: string[] = ['admin', 'Eric', 'Alice', 'Bob', 'John'];

// Loop through the array and print greetings
for (let i = 0; i < usernames.length; i++) {
    let username = usernames[i];

    // Check if the username is 'admin'
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
