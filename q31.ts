// Array of usernames
let usernames: string[] = ['admin', 'Eric', 'Alice', 'Bob', 'John'];

// Check if the list of users is not empty
if (usernames.length > 0) {
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
} else {
    // Print a message if the list of users is empty
    console.log("We need to find some users!");
}

// Remove all usernames from the array
usernames = [];

// Check if the list of users is not empty after removal
if (usernames.length > 0) {
    // This block will not be executed if the list is empty
    for (let i = 0; i < usernames.length; i++) {
        console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
    }
} else {
    // Print a message if the list of users is empty after removal
    console.log("We need to find some users!");
}
