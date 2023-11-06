// Array of usernames
var usernames = ['admin', 'Eric', 'Alice', 'Bob', 'John'];
// Loop through the array and print greetings
for (var i = 0; i < usernames.length; i++) {
    var username = usernames[i];
    // Check if the username is 'admin'
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
