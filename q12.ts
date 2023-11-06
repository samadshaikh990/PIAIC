// Array of friend names
const nammes: string[] = ['Alice', 'Bob', 'Charlie', 'David'];

// Print personalized messages to each person
console.log("Personalized Messages:");
for (let i = 0; i < nammes.length; i++) {
    const message: string = `Hello, ${nammes[i]}! Have a great day.`;
    console.log(message);
}
