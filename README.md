# Vue Basics

Documenting my first steps in **Vue** with **TypeScript** and the learning process. Also to have access to a project starter that can work as a template for future projects. **Vite** as the build tool.

## Resources:

- [Fireship Vue in 100s](https://www.youtube.com/watch?v=nhBVL41-_Cw)
- [Vue docs](https://vuejs.org/guide/introduction.html)
- [Vue + TypeScript from vue docs](https://vuejs.org/guide/typescript/overview)

## Little project

- Phase 1. Basic: [Movie Rating Counter](./movie-rating-counter/)
    - A counter that counts good and bad scenes during a movie and triggers a message depending on the current score.
    - Learning goals:
        - [`ref()`](https://vuejs.org/guide/essentials/reactivity-fundamentals.html#basic-reactivity-in-templates) 
        - [`@click`](https://vuejs.org/guide/essentials/event-handling.html#event-listeners)
        - [`v-if` or `v-show` for conditional rendering](https://vuejs.org/guide/essentials/conditional.html)
        > Generally speaking, v-if has higher toggle costs while v-show has higher initial render costs. So prefer v-show if you need to toggle something very often, and prefer v-if if the condition is unlikely to change at runtime.
        - Template syntax `{{ score }}`
        > The mustache tag will be replaced with the value of the msg property from the corresponding component instance. It will also be updated whenever the msg property changes.

- Phase 2. Diving deeper into theory
    - Vue
        - [Docs - Components Basics (basic props)](https://vuejs.org/guide/essentials/component-basics.html)
    
    - [TypeScript theory](ts-theory.md)

- Phase 3. Future learning:
    - [Routing](https://router.vuejs.org/)
    - [Docs - More about props](https://vuejs.org/guide/components/props)
    - State management with [Pinia](https://pinia.vuejs.org/)
    - [Oruga component library](https://oruga-ui.com/)

## Theory

### Project setup

```
npm create vite@latest project-name -- --template vue-ts
```

```
cd project-name
npm install
npm run dev
```

- First peek at file organization
- Removing unnecessary stuff from the template
- First learnings:
    1. TypeScript triggered in two ways:
        - Via `lang="ts"` attribute:
      ```vue
      <script setup lang="ts">
      import HelloWorld from "./components/HelloWorld.vue";
      </script>
      ```
        - Via file extension: `main.ts`

    2. `ref()` to declare reactive state
  
    3. Combine counter with ts to make sure it's a number
        - `const count = ref<number>(0);`
    4. Events:
        - `@click` = `v-on:click`
    
    5. Trying stuff: justwatch logo alert
        - :void is common (but optional) for ts when the function doesn't return anything

    6. Final learnings:
        - Without `computed()` the if statement didn't work
        - `v-if` allowed to show (or hide) span. Conditional rendering
        - `scoped` ensures styles only apply to elements within the current component

### Vue syntax

- Vue template. Similarities with JSX, but:

  - Mustache interpolation: `{{ msg }}` and `{{ count }}` - this binds JavaScript variables to the template
  - Event handlers: `@click="count++"` - this is Vue's shorthand for v-on:click
  - Reactive bindings: The variables automatically update the DOM when they change

## ChatGPT relevant prompts

- Learning instead vibe coding:

  > I'm having a technical interview tomorrow with the company movie related JW and I will be showing my process of learning TypeScript and Vue3. Key points:
  >
  > - As a developer, my stronger language is JavaScript. I know TypeScript in theory, its potential, and I want to practice the basics today. I know React, a bit of Angular, but no Vue, so I want to practice that today.
  > - I want you to suggest some simple projects to practice Vue3 with TypeScript (using vite). I will choose one to start with.
  > - I don't want you to give me the answer right away, I want to check vue's documentation, as well as TypeScript's.
  > - Once I choose a project, I want you to give me the first step to follow and once I'm done with it, I will ask you to continue.
  > - The final goal is to show in the interview my process of learning and my strong base knowledge in programming and web
  > - My interviewers are experts in Frontend web (M) and react native (G). Let's call them M and G
  > - Today's practice and tomorrow's interview could also help me decide if I want to go into Frontend at JustWatch with M or React Native with G, they are flexible
  >
  > Tell me if you got any questions or if you have any questions before suggesting possible tiny projects to start with

- Choosing the best project to start with

> Which one is aiming at the most basic Vue3 concepts? I want to start by learning the core

- From the final suggestion (a counter game), tweak it into topic

> Good, what about we make it cinema-y? Something with movie ratings and instead of lose win, it's a good movie or a bad movie?

- After completing the game, trying to establish next steps

> Okay, the little game works. Should I go for a second little app or more into typescript and vue theoretically? Am I missing very important things from core vue still? What about state and what about routing? 
