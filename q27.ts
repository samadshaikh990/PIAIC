// Alien color variable
let alien_color: string = 'green';

// If-else chain to check the alien's color
if (alien_color === 'green') {
    // Player earns 5 points for shooting the green alien
    console.log("Player earned 5 points!");
} else if (alien_color === 'yellow') {
    // Player earns 10 points for shooting the yellow alien (this block will not be executed in this version)
    console.log("Player earned 10 points!");
} else if (alien_color === 'red') {
    // Player earns 15 points for shooting the red alien (this block will not be executed in this version)
    console.log("Player earned 15 points!");
}
