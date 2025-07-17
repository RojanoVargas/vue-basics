/*
// type inference 
let greeting = 'Hello World' // const greeting: string = "Hello World"
greeting.toUpperCase()

greeting*3
*/

let greeting: string | null = null;
console.log(greeting); // prints null
greeting = 'Hello World';
console.log(greeting); // prints 'hello World'
