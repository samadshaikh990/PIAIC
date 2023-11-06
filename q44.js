// Define the order_sandwich function with a rest parameter
function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("No items selected. Please choose some items for your sandwich.");
    }
    else {
        console.log("Items:");
        for (var i = 0; i < items.length; i++) {
            console.log("- ".concat(items[i]));
        }
        console.log("Enjoy your sandwich!");
    }
}
// Call the function three times with different numbers of arguments
order_sandwich('Turkey', 'Cheese', 'Lettuce', 'Tomato');
order_sandwich('Ham', 'Swiss Cheese', 'Mustard');
order_sandwich();
