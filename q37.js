// Modified make_shirt function with default values
function make_shirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("Shirt Summary: Size ".concat(size.toUpperCase(), ", Message: \"").concat(message, "\""));
}
// Examples of calling the function with different arguments
make_shirt(); // Default: large size, default message
make_shirt('medium'); // Medium size, default message
make_shirt('small', 'Custom message'); // Small size, custom message
