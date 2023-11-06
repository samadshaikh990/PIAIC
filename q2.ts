const personName:string = "Black Smith";

let lowercaseName:string = personName.toLowerCase();
console.log(lowercaseName);


let uppercaseName:string = personName.toUpperCase();
console.log(uppercaseName);

let titlecaseName: string = personName.toLocaleLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
console.log(titlecaseName);