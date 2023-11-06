// Modified make_shirt function with default values
function make_shirt(size: string = 'large', message: string = 'I love TypeScript'): void {
    console.log(`Shirt Summary: Size ${size.toUpperCase()}, Message: "${message}"`);
}

// Examples of calling the function with different arguments
make_shirt(); // Default: large size, default message
make_shirt('medium'); // Medium size, default message
make_shirt('small', 'Custom message'); // Small size, custom message
