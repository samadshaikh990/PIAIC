// Define the order_sandwich function with a rest parameter
function order_sandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("No items selected. Please choose some items for your sandwich.");
    } else {
        console.log("Items:");
        for (let i = 0; i < items.length; i++) {
            console.log(`- ${items[i]}`);
        }
        console.log("Enjoy your sandwich!");
    }
}

// Call the function three times with different numbers of arguments
order_sandwich('Turkey', 'Cheese', 'Lettuce', 'Tomato');
order_sandwich('Ham', 'Swiss Cheese', 'Mustard');
order_sandwich();
