// List of current usernames
let current_users: string[] = ['John', 'Alice', 'Bob', 'Charlie', 'David'];

// List of new usernames
let new_users: string[] = ['Alice', 'Eric', 'john', 'Frank', 'Grace'];

// Loop through the new_users list to check for uniqueness (case-insensitive)
for (let i = 0; i < new_users.length; i++) {
    let new_username = new_users[i].toLowerCase(); // Convert to lowercase for case-insensitive comparison

    // Check if the new username is already in the current_users list
    if (current_users.includes(new_username)) {
        console.log(`Sorry, the username '${new_users[i]}' is not available. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_users[i]}' is available.`);
        // Add the new username to the current_users list to ensure uniqueness
        current_users.push(new_username);
    }
}
