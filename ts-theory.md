# TypeScript theory

## Key points
- Maintained and developed by Microsoft
- TS = JavaScript + other stuff (Types, basically)
- Future of JavaScript
- Pros
    - Fewer bugs
    - Scalability
- VS Code uses ts under the hood for suggestions and corrections
- Bun can run TypeScript natively

## Resources
- [Fireship TS in 100s](https://www.youtube.com/watch?v=zQnBQ4tB3ZA)
- [Docs_TypeScript for JS programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- Book: [Learning TypeScript - Josh Goldberg - O'Reilly](https://www.learningtypescript.com/)

## Basics

### Types by Inference
```ts
// type inference 
let greeting = 'Hello World' // const greeting: string = "Hello World"
greeting.toUpperCase()

greeting*3 // error would not show in vanilla js
```

### Several basic types

    ```ts
    const isDone: boolean = false;  // isDone will always be a boolean
    const color: string = "blue";   // color will always be a string
    const price: number = 6;        // price will always be a number

    // Arrays can be typed as well
    const names: string[] = ['Aquila', 'Ivan', 'Bardha']

    let notSure: any = 4;         // notSure can be any type
    notSure = "something";
    notSure = false;
    ```

    - You can also add types to functions
        - You can declare types for parameters
        - You can declare the return type

    ```ts
    function add(x: number, y: number): number {
        return x + y;
    }

    const x: number = add(1, 5)  // x will be a number
    const y = add(200,30)        // y will be a number
    ```

### Composing types

- Different data types

```ts
let greeting: string | null = null;
console.log(greeting); // prints null
greeting = 'Hello World';
console.log(greeting); // prints 'hello World'
```

- Unions provide a way to handle different types too. For example, you may have a function that takes an array or a string (documentation):

```ts
function getLength(obj: string | string[]) {
  return obj.length;
}
```

## Next learning points

- TypeScript specific types (like the previously used `void`)
- Custom types
- Josh Goldberg's book