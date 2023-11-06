// List of current usernames
var current_users = ['John', 'Alice', 'Bob', 'Charlie', 'David'];
// List of new usernames
var new_users = ['Alice', 'Eric', 'john', 'Frank', 'Grace'];
// Loop through the new_users list to check for uniqueness (case-insensitive)
for (var i = 0; i < new_users.length; i++) {
    var new_username = new_users[i].toLowerCase(); // Convert to lowercase for case-insensitive comparison
    // Check if the new username is already in the current_users list
    if (current_users.includes(new_username)) {
        console.log("Sorry, the username '".concat(new_users[i], "' is not available. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_users[i], "' is available."));
        // Add the new username to the current_users list to ensure uniqueness
        current_users.push(new_username);
    }
}
