export const data = {
 react: [
  // BASICS
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces...",
    category: "basics"
  },
  {
    question: "What are components in React?",
    answer: "Components are independent, reusable blocks of UI...",
    category: "basics"
  },
  {
    question: "What’s the difference between functional and class components?",
    answer: "Class components were the older way...",
    category: "basics"
  },
  {
    question: "What is JSX?",
    answer: "JSX is a syntax extension that allows writing HTML-like code...",
    category: "basics"
  },
  {
    question: "What is the Virtual DOM?",
    answer: "The Virtual DOM is a lightweight in-memory copy of the DOM...",
    category: "basics"
  },
  {
    question: "What are props in React?",
    answer: "Props are read-only data passed from parent to child...",
    category: "basics"
  },
  {
    question: "What is state in React?",
    answer: "State is data managed within a component...",
    category: "basics"
  },
  {
    question: "What are React Fragments?",
    answer: "Fragments allow returning multiple elements without extra wrappers...",
    category: "basics"
  },
  {
    question: "What is conditional rendering in React?",
    answer: "Conditional rendering means showing different UI pieces...",
    category: "basics"
  },
  {
    question: "What are lists and keys in React?",
    answer: "Lists let you render data and keys help React track items...",
    category: "basics"
  },

  // HOOKS
  {
    question: "What are Hooks in React?",
    answer: "Hooks allow functional components to use state and lifecycle features...",
    category: "hooks"
  },
  {
    question: "What is the useState hook?",
    answer: "useState lets components add internal state...",
    category: "hooks"
  },
  {
    question: "What is the useEffect hook?",
    answer: "useEffect allows performing side effects...",
    category: "hooks"
  },
  {
    question: "What is the difference between useEffect and useLayoutEffect?",
    answer: "useEffect runs after paint, useLayoutEffect runs before paint...",
    category: "hooks"
  },
  {
    question: "What is the useRef hook?",
    answer: "useRef stores mutable values without causing re-renders...",
    category: "hooks"
  },
  {
    question: "What is the useMemo hook?",
    answer: "useMemo memoizes expensive computations...",
    category: "hooks"
  },
  {
    question: "What is the useCallback hook?",
    answer: "useCallback memoizes function references...",
    category: "hooks"
  },
  {
    question: "What is useReducer in React?",
    answer: "useReducer manages complex state using reducers...",
    category: "hooks"
  },
  {
    question: "When would you use useReducer instead of useState?",
    answer: "Use useReducer when state logic is complex...",
    category: "hooks"
  },
  {
    question: "What are custom hooks in React?",
    answer: "Custom hooks allow extracting reusable logic...",
    category: "hooks"
  },
  {
    question: "Can hooks be used inside loops or conditionals?",
    answer: "No, hooks must run in the same order each render...",
    category: "hooks"
  },
  {
    question: "What happens if you update state directly?",
    answer: "Direct state mutation won't trigger re-render...",
    category: "hooks"
  },

  // ADVANCED
  {
    question: "What are controlled and uncontrolled components?",
    answer: "Controlled components use React state, uncontrolled rely on DOM...",
    category: "advance"
  },
  {
    question: "What is lifting state up?",
    answer: "Moving shared state to a parent component...",
    category: "advance"
  },
  {
    question: "What is Context API?",
    answer: "Context API shares global data without prop drilling...",
    category: "advance"
  },
  {
    question: "What is the difference between Context API and Redux?",
    answer: "Context is lightweight; Redux is for large complex apps...",
    category: "advance"
  },
  {
    question: "What is React.memo?",
    answer: "React.memo prevents unnecessary re-renders...",
    category: "advance"
  },
  {
    question: "What is useImperativeHandle?",
    answer: "It customizes what a parent can access using refs...",
    category: "advance"
  },
  {
    question: "What is reconciliation in React?",
    answer: "Reconciliation compares old and new virtual DOM trees...",
    category: "advance"
  },
  {
    question: "What is React Fiber?",
    answer: "Fiber is React’s new reconciliation engine...",
    category: "advance"
  },
  {
    question: "What is Suspense in React?",
    answer: "Suspense pauses UI until data is ready...",
    category: "advance"
  },
  {
    question: "What is an Error Boundary?",
    answer: "Error boundaries catch runtime errors in components...",
    category: "advance"
  },

  // PERFORMANCE
  {
    question: "How do you optimize performance in React apps?",
    answer: "Memoization, lazy loading, avoiding re-renders...",
    category: "advance"
  },
  {
    question: "What is code splitting in React?",
    answer: "Splitting the bundle to load only needed parts...",
    category: "advance"
  },
  {
    question: "What is lazy loading in React?",
    answer: "Loading components only when needed...",
    category: "advance"
  },
  {
    question: "How do you prevent unnecessary re-renders?",
    answer: "Using memoization and React.memo/useMemo/useCallback...",
    category: "advance"
  },
  {
    question: "What is tree shaking in React?",
    answer: "Removing unused code during bundling...",
    category: "advance"
  },
  {
    question: "How do you test React components?",
    answer: "Using Jest, RTL, Cypress...",
    category: "advance"
  },
  {
    question: "What is snapshot testing in React?",
    answer: "Compares previous UI output to detect changes...",
    category: "advance"
  },
  {
    question: "How do you handle API errors in React?",
    answer: "Use try/catch and fallback UI...",
    category: "advance"
  },
  {
    question: "What is PropTypes in React?",
    answer: "Runtime type checking for props...",
    category: "advance"
  },
  {
    question: "What is TypeScript in React?",
    answer: "Static typing for safer React apps...",
    category: "advance"
  },

  // NEXT.JS & SECURITY
  {
    question: "What is server-side rendering (SSR) in Next.js?",
    answer: "SSR renders pages on the server...",
    category: "advance"
  },
  {
    question: "What is static site generation (SSG)?",
    answer: "SSG pre-renders HTML at build time...",
    category: "advance"
  },
  {
    question: "What is client-side rendering (CSR)?",
    answer: "CSR renders content in the browser...",
    category: "advance"
  },
  {
    question: "How do you prevent XSS attacks in React?",
    answer: "React escapes values; avoid dangerouslySetInnerHTML...",
    category: "important"
  },
  {
    question: "How do you handle CSRF attacks in React?",
    answer: "By using CSRF tokens...",
    category: "important"
  },
  {
    question: "What is JWT and how is it used in React?",
    answer: "JWT authenticates users; stored and sent with requests...",
    category: "important"
  },
  {
    question: "What is Webpack?",
    answer: "Module bundler for JS assets...",
    category: "advance"
  },
  {
    question: "What is Babel?",
    answer: "Transforms modern JS/JSX to browser-compatible JS...",
    category: "advance"
  },
  {
    question: "What is NPM?",
    answer: "Package manager for JavaScript...",
    category: "basics"
  },
  {
    question: "How do you deploy a React app?",
    answer: "Build and deploy to Netlify, Vercel, etc...",
    category: "advance"
  },

  // REDUX
  {
    question: "What is Redux?",
    answer: "Redux is a predictable state container...",
    category: "advance"
  },
  {
    question: "Why use Redux instead of local state?",
    answer: "It solves prop drilling and manages global state...",
    category: "advance"
  },
  {
    question: "What are actions in Redux?",
    answer: "Plain objects describing events...",
    category: "advance"
  },
  {
    question: "What are reducers in Redux?",
    answer: "Pure functions returning new state...",
    category: "advance"
  },
  {
    question: "What is the Redux store?",
    answer: "Holds application state and processes actions...",
    category: "advance"
  },
  {
    question: "How do you dispatch actions in Redux?",
    answer: "Use dispatch() or useDispatch...",
    category: "advance"
  },
  {
    question: "What is useSelector in Redux?",
    answer: "Reads state from the store...",
    category: "advance"
  },
  {
    question: "What is useDispatch in Redux?",
    answer: "Dispatches actions to reducers...",
    category: "advance"
  },
  {
    question: "What is Redux middleware?",
    answer: "Runs between dispatch and reducer...",
    category: "advance"
  },
  {
    question: "What is Redux Thunk?",
    answer: "Allows async logic in Redux...",
    category: "advance"
  },
  {
    question: "What is Redux Toolkit?",
    answer: "Simplifies Redux with utilities...",
    category: "advance"
  },
  {
    question: "What is a slice in Redux Toolkit?",
    answer: "Contains state, reducers, and actions for a feature...",
    category: "advance"
  },
  {
    question: "What is createAsyncThunk?",
    answer: "Handles async actions with auto-generated states...",
    category: "advance"
  },
  {
    question: "How is combineReducers used?",
    answer: "Merges multiple reducers...",
    category: "advance"
  },
  {
    question: "Difference between Redux and Redux Toolkit?",
    answer: "RTK reduces boilerplate and simplifies Redux...",
    category: "advance"
  },
  {
    question: "Common Redux patterns?",
    answer: "Slices, selectors, middleware, async thunks...",
    category: "advance"
  },

  // EXTRA
  {
    question: "What is prop drilling?",
    answer: "Passing props through multiple layers...",
    category: "important"
  },
  {
    question: "Difference between prop drilling and lifting state up?",
    answer: "Prop drilling passes downward; lifting moves state upward...",
    category: "advance"
  },
  {
    question: "What are Higher-Order Components (HOCs)?",
    answer: "Functions that return enhanced components...",
    category: "advance"
  },
  {
    question: "What are render props?",
    answer: "A technique for sharing logic using functions that return JSX...",
    category: "advance"
  },
  {
    question: "What are React Portals?",
    answer: "Render elements outside parent DOM hierarchy...",
    category: "advance"
  },
  {
    question: "What are common performance pitfalls in React?",
    answer: "Unnecessary re-renders, inline heavy functions...",
    category: "advance"
  },
  {
    question: "What is lazy loading in React?",
    answer: "Loads components when needed...",
    category: "advance"
  },
  {
    question: "What is the difference between controlled and uncontrolled components?",
    answer: "Controlled use state; uncontrolled use DOM...",
    category: "basics"
  },
  {
    question: "What is React Fiber?",
    answer: "React's concurrent rendering engine...",
    category: "advance"
  },
  {
    question: "What are concurrent features in React?",
    answer: "Allow React to prioritize updates...",
    category: "advance"
  }
],

javascript: [
  {
    question: "What is a closure in JavaScript?",
    answer: "A closure is when an inner function remembers and can access variables from its outer function's scope, even after that outer function has finished running. Real-world use case: You can use it for a private counter — only the inner function can access and change the count, keeping it hidden from the rest of the code."
  },
  {
    question: "What is hoisting in JavaScript?",
    answer: "Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope during compilation. This means you can call a function before it's declared in your code. Only the declaration is hoisted, not the initialization. For example, using var before its assignment gives undefined, but using let or const results in a ReferenceError. Real-world use case: console.log(a); var a = 5; prints undefined, but let a = 5 would break — useful to avoid surprises."
  },
  {
    question: "Difference between var, let, and const?",
    answer: "var is function-scoped, can be redeclared and reassigned. let and const are block-scoped, safer, and predictable. let allows reassignment; const does not. Real-world use case: Use const for constants like API URLs, let for counters, and avoid var unless function scope is needed."
  },
  {
    question: "Difference between == and ===?",
    answer: "== is a loose equality check that performs type conversion before comparing values, while === is strict and compares value and type. Real-world use case: input === 5 won’t convert '5' automatically, helping catch type issues early."
  },
  {
    question: "Explain scope in JavaScript",
    answer: "Scope defines where a variable can be accessed: global, function, and block scope (let/const). Real-world use case: Keeping a counter inside a function so it doesn’t interfere with other code."
  },
  {
    question: "What is a prototype?",
    answer: "Every object in JS has a prototype — a parent object it can inherit methods and properties from. Real-world use case: Instead of duplicating methods across objects, put it on the prototype for shared use and memory efficiency."
  },
  {
    question: "Difference between call, apply, and bind?",
    answer: "All three set what 'this' refers to. call runs immediately with listed arguments, apply runs immediately with arguments in an array, bind returns a new function to run later. Real-world use case: Borrow methods or preset 'this' in event handlers."
  },
  {
    question: "What is a callback function?",
    answer: "A callback is a function passed as an argument to another function, executed later. Commonly used for async operations. Real-world use case: setTimeout(() => console.log('done'), 1000); runs after a second."
  },
  {
    question: "Difference between undefined and null?",
    answer: "undefined means declared but not assigned; null is an intentional 'no value'. Real-world use case: API responses may return null for missing fields, uninitialized variables are undefined."
  },
  {
    question: "What is the event loop?",
    answer: "The event loop enables JS’s async, non-blocking behavior. It checks the Call Stack and Callback Queue, moving tasks from queue to stack when the stack is empty. Real-world use case: Coordinates async operations like network requests or timers."
  },
  {
    question: "What is callback hell?",
    answer: "Callback hell occurs with multiple nested callbacks, making code hard to read. Solution: use Promises or async/await. Real-world use case: Chained API calls with multiple nested callbacks — better handled with promises."
  },
  {
    question: "What is a promise?",
    answer: "A Promise represents the eventual completion (or failure) of an async operation. Allows attaching success (.then) or failure (.catch) handlers. Real-world use case: fetch(url).then(res => res.json()).then(data => console.log(data));"
  },
  {
    question: "Difference between async/await and promises?",
    answer: "Async/await is syntactic sugar over Promises, making async code look synchronous and easier to read. Real-world use case: const data = await fetchData();"
  },
  {
    question: "What is currying?",
    answer: "Currying transforms a multi-argument function into a sequence of single-argument functions. Real-world use case: multiply(2)(3) instead of multiply(2, 3); useful for reusable functions."
  },
  {
    question: "What is debouncing?",
    answer: "Debouncing delays a function until after a pause in events. Real-world use case: In a search bar, API calls trigger only after the user stops typing."
  },
  {
    question: "What is throttling?",
    answer: "Throttling limits a function to run at most once per specified interval. Real-world use case: Limiting scroll or resize events for performance."
  },
  {
    question: "Difference between ==, === and Object.is()?",
    answer: "== does loose comparison with type coercion, === is strict, Object.is() handles special cases like NaN equality and -0/+0. Real-world use case: Comparing tricky edge cases safely."
  },
  {
    question: "What is a module in JavaScript?",
    answer: "Modules break code into files with their own scope. You can export functions, objects, or primitives and import them elsewhere. Real-world use case: utils.js exports functions reused across multiple files."
  },
  {
    question: "What is destructuring?",
    answer: "Destructuring unpacks values from arrays or objects into variables. Real-world use case: const {name, age} = user; avoids writing user.name repeatedly."
  },
  {
    question: "What is the spread operator?",
    answer: "The spread operator (...) expands arrays or objects into individual elements. Real-world use case: [...arr1, ...arr2] merges arrays."
  },
  {
    question: "What is the rest operator?",
    answer: "The rest operator (...) collects remaining arguments into an array. Real-world use case: function sum(...nums) handles any number of inputs."
  },
  {
    question: "What is a higher-order function?",
    answer: "A function that takes another function as an argument, returns a function, or both. Real-world use case: arr.map(x => x*2) — map is higher-order."
  },
  {
    question: "Difference between call stack and task queue?",
    answer: "Call stack runs code line by line; task queue holds async callbacks until stack is empty. Real-world use case: Explains setTimeout and promises execution order."
  },
  {
    question: "What is a memory leak?",
    answer: "Memory leaks happen when unused memory isn’t released, slowing down apps. Real-world use case: Forgetting to remove event listeners after a component unmount in React."
  },
  {
    question: "Difference between var, let, const in hoisting and scope?",
    answer: "var is hoisted and initialized as undefined (function-scoped). let/const are hoisted but not initialized (temporal dead zone) and block-scoped. Real-world use case: console.log(a); var a = 5 works, console.log(b); let b = 5 breaks."
  },
  {
    question: "How do you select elements in the DOM?",
    answer: "Use getElementById, querySelector, or querySelectorAll. Real-world use case: Selecting a button by ID to attach a click event."
  },
  {
    question: "How do you add and remove event listeners?",
    answer: "Use element.addEventListener('event', handler) to attach, removeEventListener to detach. Real-world use case: Adding a click listener on a modal button and removing it when closed."
  },
  {
    question: "What is event delegation?",
    answer: "Attach a listener to a parent and use event.target to check which child triggered it. Real-world use case: Handling clicks on long lists efficiently."
  },
  {
    question: "Difference between bubbling and capturing?",
    answer: "Bubbling: event goes child → parent; capturing: parent → child. Default is bubbling. Real-world use case: Stopping a click on a modal backdrop from affecting inner buttons."
  },
  {
    question: "How do you prevent default behavior of events?",
    answer: "Call event.preventDefault(). Real-world use case: Prevent a form from refreshing the page on submit."
  },
  {
    question: "What are arrow functions and how are they different?",
    answer: "Arrow functions have shorter syntax and no own 'this'; inherit 'this' from surrounding scope. Real-world use case: Cleaner array methods like arr.map(x => x*2)."
  },
  {
    question: "Difference between default and named exports?",
    answer: "Default export: one main item per file; named exports: multiple items per file. Real-world use case: Export utility function as default, helpers as named."
  },
  {
    question: "What are template literals?",
    answer: "Template literals use backticks (`) and ${} for interpolation. Real-world use case: const name = 'Alex'; console.log(`Hello, ${name}!`);"
  },
  {
    question: "What are generators?",
    answer: "Generators are functions that can pause and resume with yield. Real-world use case: Lazily producing values, e.g., reading a file line by line."
  },
  {
    question: "What are symbols in JavaScript?",
    answer: "Symbols are unique, immutable values, often used as object keys to avoid name clashes. Real-world use case: Hidden object properties without collisions."
  },
  {
    question: "What are microtasks and macrotasks?",
    answer: "Microtasks (Promises) run before macrotasks (setTimeout) in the event loop. Real-world use case: Promise.resolve().then() runs before setTimeout."
  },
  {
    question: "Difference between synchronous and asynchronous code?",
    answer: "Sync code runs line by line and blocks; async code allows other tasks to run while waiting. Real-world use case: Sync = reading a variable; async = fetching data from a server."
  },
  {
    question: "What is garbage collection in JavaScript?",
    answer: "JS automatically frees memory from objects no longer referenced. Real-world use case: Variables inside a function disappear after it finishes unless stored elsewhere."
  },
  {
    question: "What are weak maps and weak sets?",
    answer: "WeakMap and WeakSet hold weak references to objects so garbage collection can clean them if unused. Real-world use case: Storing metadata for DOM elements safely."
  },
  {
    question: "What is memoization?",
    answer: "Caching a function’s results so repeated calls with same input return instantly. Real-world use case: Caching API responses or expensive calculations like factorial."
  },
  {
    question: "What is 'this' in JavaScript?",
    answer: "'this' refers to the object calling the function. Value depends on how the function is invoked. Real-world use case: Inside a class method, 'this' is the instance."
  },
  {
    question: "Difference between class and prototype-based inheritance?",
    answer: "Classes are syntactic sugar over prototypes. Real-world use case: Creating a User class with shared methods."
  },
  {
    question: "What is functional programming in JavaScript?",
    answer: "Writing pure functions, avoiding side effects, and using higher-order functions like map, filter, reduce. Real-world use case: users.filter(u => u.active)."
  },
  {
    question: "What is immutability in JavaScript?",
    answer: "Not changing data directly, but creating new copies when needed. Real-world use case: In React, use setState([...old, newItem]) instead of mutating the array."
  },
  {
    question: "What is composition over inheritance?",
    answer: "Build functionality by combining smaller functions/objects instead of deep class hierarchies. Real-world use case: Combine drive() and fly() behaviors instead of multiple inheritance."
  },
  {
    question: "How do you handle errors in JavaScript?",
    answer: "Use try...catch for sync code; .catch or try...catch for async code. Real-world use case: Wrapping API call in try/catch to show error message if server is down."
  },
  {
    question: "What is localStorage, sessionStorage, and cookies?",
    answer: "localStorage: permanent, sessionStorage: clears on tab close, cookies: sent to server. Real-world use case: JWT in localStorage, temporary data in sessionStorage, preferences in cookies."
  },
  {
    question: "What is XSS and how do you prevent it?",
    answer: "XSS is when attackers inject malicious scripts. Prevent by sanitizing input and using frameworks that escape HTML. Real-world use case: Escaping <script> tags in user comments."
  },
  {
    question: "What is CSRF and how do you prevent it?",
    answer: "CSRF tricks a logged-in user into making unwanted requests. Prevent with CSRF tokens and SameSite cookies. Real-world use case: Protect banking apps from auto-submitting transfers."
  },
  {
    question: "What are Babel and Webpack in simple terms?",
    answer: "Babel converts modern JS to older JS for browser compatibility. Webpack bundles many files into optimized ones. Real-world use case: React apps use Babel and Webpack for deployment."
  },
  {
    question: "What are the data types in JavaScript?",
    answer: "Primitive: number, string, boolean, null, undefined, symbol, bigint. Non-primitive: objects, arrays, functions. Real-world use case: Knowing difference avoids bugs — strings/numbers immutable, arrays/objects mutable."
  },
  {
    question: "Difference between primitive and non-primitive data types?",
    answer: "Primitive values are stored directly and compared by value; non-primitives are references compared by memory address. Real-world use case: {a:1} === {a:1} → false, because different memory addresses."
  },
  {
    question: "What is event bubbling?",
    answer: "Event bubbling: event triggers on the target element first, then its parent, up through ancestors. Real-world use case: Clicking a button inside a div triggers button, then div, then body events."
  },
  {
    question: "What is event capturing?",
    answer: "Event capturing: event travels from topmost parent down to target element. Real-world use case: Capturing an event before it reaches the target element."
  }
],

  typescript: [
    {
      question: "What is TypeScript?",
      answer:
        "TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. Developed by Microsoft, it adds optional static typing, classes, interfaces, and other features to JavaScript. TypeScript helps catch errors during development, improves code quality and maintainability, enables better IDE support with autocomplete and refactoring, and makes large codebases more manageable.",
    },
    {
      question: "What are TypeScript interfaces?",
      answer:
        "Interfaces define the structure of an object by describing the shape of data. They specify property names, types, optional properties, and readonly modifiers. Interfaces support extension, can describe function types, and enable duck typing. Unlike types, interfaces are open and can be merged. They're primarily used for defining object shapes and implementing contracts in classes.",
    },
    {
      question: "What is the difference between type and interface?",
      answer:
        "Both define object shapes, but with differences: interfaces can be extended and merged (declaration merging), while types cannot be reopened. Types can represent primitives, unions, tuples, and complex types, while interfaces are specifically for objects. Types use = while interfaces don't. Generally, use interfaces for object shapes and public APIs, and types for everything else.",
    },
    {
      question: "What are TypeScript generics?",
      answer:
        "Generics enable creating reusable components that work with multiple types while maintaining type safety. They use angle bracket notation <T> to define type parameters that are determined when the function, class, or interface is used. Generics help avoid code duplication, maintain type information through operations, and create flexible, type-safe abstractions like Array<T> or Promise<T>.",
    },
    {
      question: "What is type inference in TypeScript?",
      answer:
        "Type inference is TypeScript's ability to automatically deduce types without explicit annotations. The compiler infers types from initialization values, return statements, and context. For example, let x = 5 infers number type. This reduces verbosity while maintaining type safety. Best practice is to let TypeScript infer when obvious, but explicitly type function signatures and public APIs.",
    },
    {
      question: "What are union and intersection types?",
      answer:
        "Union types (|) allow a value to be one of several types: string | number means the value can be either. Intersection types (&) combine multiple types into one: Person & Employee means the value must satisfy both types. Unions represent 'or' relationships and are common for parameters, while intersections represent 'and' relationships and are useful for mixing types.",
    },
  ],

css: [
  {
    question: "What is the difference between relative, absolute, fixed, and sticky positioning in CSS?",
    answer: "Relative: positioned relative to its normal spot. Absolute: positioned relative to its nearest positioned ancestor. Fixed: positioned relative to the viewport. Sticky: switches between relative and fixed depending on scroll. Real-world use case: A sticky navbar stays visible while scrolling, while a fixed footer always stays at the bottom of the screen."
  },
  {
    question: "What is the difference between inline, inline-block, and block elements in CSS?",
    answer: "Inline doesn’t allow width/height, inline-block allows them but stays inline, block takes full width. Real-world use case: Inline-block is often used for creating button groups side by side with equal sizes."
  },
  {
    question: "What is the difference between em, rem, %, and px units in CSS?",
    answer: "px: fixed pixels. em: relative to parent font size. rem: relative to root font size. %: relative to parent’s size. Real-world use case: Use rem for consistent scaling in responsive design."
  },
  {
    question: "What is the difference between inline-style, internal CSS, and external CSS?",
    answer: "Inline affects one element, internal applies styles inside the same file, external links a CSS file. Real-world use case: External CSS keeps code clean and reusable across multiple pages."
  },
  {
    question: "What are pseudo-classes in CSS?",
    answer: "Pseudo-classes define the state of an element, like :hover, :focus, :nth-child. Real-world use case: Highlighting a button when a user hovers with button:hover { background: blue; }."
  },
  {
    question: "What is the difference between relative units and absolute units in CSS?",
    answer: "Relative units (em, rem, %) adjust based on parent or root, absolute units (px, cm) stay fixed. Real-world use case: Relative units are better for responsive websites."
  },
  {
    question: "What are CSS flexbox and grid used for?",
    answer: "Flexbox is for one-dimensional layouts (row or column), Grid is for two-dimensional layouts. Real-world use case: Flexbox is used for navbars, Grid for complex dashboard layouts."
  },
  {
    question: "What is the difference between inline CSS and external CSS in performance?",
    answer: "Inline CSS loads faster for small snippets but is harder to maintain, external CSS loads once and applies everywhere. Real-world use case: External CSS is best for large apps like e-commerce sites."
  },
  {
    question: "What is the difference between relative z-index values?",
    answer: "z-index controls the stack order of elements — higher values appear above lower ones. Real-world use case: Used in modals or dropdowns to make them appear above the page."
  },
  {
    question: "What is the difference between transition, transform, and animation in CSS?",
    answer: "transition: smooth change of properties. transform: rotates, scales, skews elements. animation: keyframe-based movements. Real-world use case: A button hover uses transition, a rotating logo uses transform, and a loading spinner uses animation."
  },
  {
    question: "What is the CSS Box Model?",
    answer: "The CSS box model describes how every element is made up of content, padding, border, and margin. Understanding it helps control spacing and layout accurately."
  },
  {
    question: "What is CSS specificity?",
    answer: "Specificity determines which rule applies if multiple rules target the same element. Inline styles have the highest priority, followed by IDs, then classes, and then tag selectors."
  },
  {
    question: "What is the difference between display: none and visibility: hidden?",
    answer: "display: none removes the element entirely from the document flow, while visibility: hidden keeps the element’s space but hides the content."
  },
  {
    question: "What is the difference between pseudo-classes and pseudo-elements?",
    answer: "Pseudo-classes like :hover represent a state of an element, while pseudo-elements like ::before or ::after create virtual elements that don’t exist in the DOM. Real-world use case: Adding decorative content like an icon before a heading with ::before."
  },
  {
    question: "What is the importance of z-index?",
    answer: "z-index controls stacking order, but it only works on positioned elements and within the same stacking context. Children cannot escape a parent stacking context even with higher z-index."
  },
  {
    question: "What is the difference between content-box and border-box?",
    answer: "With content-box, width applies only to content; padding and border add extra size. With border-box, padding and border are included inside the set width, simplifying layout calculations."
  },
  {
    question: "How to avoid CSS specificity wars?",
    answer: "Maintain consistent class-based styling, avoid inline styles, and use reusable utility classes or methodologies like BEM."
  },
  {
    question: "How do transitions differ from animations?",
    answer: "Transitions occur in response to a state change, like hover, whereas animations can run automatically with keyframes and provide more complex movement control."
  },
  {
    question: "How does Flexbox work?",
    answer: "Flexbox is a one-dimensional layout system arranging items along a main axis and cross axis, making it easy to align, distribute, and reorder elements within a container."
  },
  {
    question: "What is the difference between justify-content and align-items?",
    answer: "justify-content controls alignment along the main axis, align-items handles alignment along the cross axis."
  },
  {
    question: "What does flex: 1 mean?",
    answer: "flex: 1 allows the element to grow to fill remaining space, shrink if needed, and start with a flex-basis of 0, adapting flexibly within the container."
  },
  {
    question: "What is the difference between flex-direction: row and column?",
    answer: "row aligns items horizontally from left to right, column aligns items vertically from top to bottom, changing the main axis."
  },
  {
    question: "What is the purpose of flex-wrap?",
    answer: "flex-wrap allows items to wrap onto multiple lines instead of shrinking too small, which is crucial for responsive layouts on smaller screens."
  },
  {
    question: "How to center content using Flexbox?",
    answer: "Set the container to display: flex, then justify-content: center and align-items: center."
  },
  {
    question: "Flexbox vs Grid",
    answer: "Flexbox is ideal for one-dimensional layouts (row or column), Grid is best for two-dimensional layouts controlling both rows and columns."
  },
  {
    question: "How do media queries work and what is mobile-first design?",
    answer: "Media queries apply styles based on device characteristics like width. Mobile-first means designing for small screens first and scaling up with min-width breakpoints."
  },
  {
    question: "How to make images responsive?",
    answer: "Use max-width: 100% and height: auto; use object-fit: cover to maintain aspect ratio inside containers."
  },
  {
    question: "Why are responsive units important?",
    answer: "Responsive units like vh, vw, %, em, and rem help layouts scale across screen sizes, making interfaces flexible and user-friendly."
  }
]
,

  html: [
  {
    question: "What is semantic HTML?",
    answer: "Semantic HTML uses tags that describe the meaning of the content, like <header>, <article>, <footer>. Real-world use case: Improves SEO and accessibility — for example, <nav> helps screen readers identify navigation menus."
  },
  {
    question: "What are meta tags in HTML?",
    answer: "Meta tags provide extra information about a webpage, like description, keywords, author, or viewport settings. Real-world use case: <meta name='description' content='E-commerce site for electronics'> improves search engine visibility."
  },
  {
    question: "What is the difference between block-level and inline elements?",
    answer: "Block-level elements (<div>, <p>, <section>) take full width and start on a new line, while inline elements (<span>, <a>, <strong>) only take the needed space. Real-world use case: <span> is used for styling part of text without breaking the line, <div> is used for layout sections."
  },
  {
    question: "What are HTML5 APIs?",
    answer: "HTML5 introduced built-in APIs like Geolocation, Canvas, Web Storage, and Audio/Video. Real-world use case: Geolocation API helps a food delivery app detect a user’s location automatically."
  },
  {
    question: "What is the difference between id and class?",
    answer: "id is unique and identifies a single element, while class can be shared across multiple elements. Real-world use case: id='header' for one header section, class='btn' for styling multiple buttons."
  },
  {
    question: "What is the difference between <link> and <script>?",
    answer: "<link> is used to include external resources like CSS, while <script> is used to load JavaScript. Real-world use case: <link rel='stylesheet' href='style.css'> adds styles, <script src='app.js'></script> adds interactivity."
  },
  {
    question: "What are attributes in HTML?",
    answer: "Attributes provide extra information about elements, written inside the opening tag. Real-world use case: <img src='logo.png' alt='Company Logo'> uses attributes to load an image and describe it for accessibility."
  },
  {
    question: "What is the difference between inline, internal, and external CSS in HTML?",
    answer: "Inline is written inside the tag, internal is in <style> in the same file, external is linked using <link>. Real-world use case: External CSS is best for big projects since one file controls the whole site’s design."
  },
  {
    question: "What is the difference between <section>, <article>, and <div>?",
    answer: "<section> groups related content, <article> is for self-contained content, <div> is a generic container. Real-world use case: A blog site may use <section> for categories and <article> for each post."
  },
  {
    question: "What are HTML forms used for?",
    answer: "Forms collect user input through elements like text fields, checkboxes, and buttons. Real-world use case: Login, registration, and checkout pages all rely on forms."
  }
],
nodejs: [
  {
    question: "What is Node.js and why is it popular?",
    answer: "Node.js lets you run JavaScript on the server, not just in the browser. It's popular because it's fast for handling lots of small tasks at once, ideal for real-time apps like chat, and allows developers to use JavaScript for both front-end and back-end."
  },
  {
    question: "How does the Node.js event loop work?",
    answer: "The event loop is a constantly running loop that checks for code waiting to execute. When a task like reading a file comes in, Node sets it aside, continues handling other requests, and comes back once the task finishes. This non-blocking behavior is key."
  },
  {
    question: "Is Node.js single-threaded? How does it handle concurrency?",
    answer: "Yes, the JavaScript code runs on a single thread. Node uses libuv to handle heavy tasks in the background with a pool of threads, while the event loop coordinates tasks between them."
  },
  {
    question: "What is the difference between synchronous and asynchronous code?",
    answer: "Synchronous code blocks execution, like standing in a single line. Asynchronous code doesn't block; you can continue other tasks while waiting, like taking a number at a deli and coming back when called."
  },
  {
    question: "What are some common built-in modules in Node.js?",
    answer: "Common modules include fs (file system), http (web servers), path (file paths), and events (custom events)."
  },
  {
    question: "What is npm and the difference between dependencies and devDependencies?",
    answer: "npm is Node's package manager. dependencies are needed for the app to run in production, devDependencies are only needed during development, like testing frameworks or linters."
  },
  {
    question: "What is middleware in Node.js?",
    answer: "Middleware is a function that sits between a request and response, used for processing steps like authentication, data parsing, or logging before reaching the final route handler."
  },
  {
    question: "What is the purpose of the package.json file?",
    answer: "package.json is the blueprint for your project, listing name, version, dependencies, and scripts like npm start or npm test."
  },
  {
    question: "How do you handle errors in Node.js?",
    answer: "Use try/catch for synchronous and asynchronous code. In Express, use a dedicated error-handling middleware at the end to catch errors and send clean responses."
  },
  {
    question: "What is a stream in Node.js?",
    answer: "A stream handles data piece by piece instead of loading it all into memory, useful for large files or live data feeds."
  },
  {
    question: "What is the difference between require and import?",
    answer: "require is CommonJS (older), import is ES6 (newer). import allows tree-shaking to remove unused code, making front-end bundles more efficient."
  },
  {
    question: "What is clustering in Node.js?",
    answer: "Clustering creates multiple app instances, one per CPU core, letting Node take full advantage of multi-core systems and handle more traffic."
  },
  {
    question: "What is process.nextTick()?",
    answer: "process.nextTick() schedules a function to run immediately after the current operation finishes, before the event loop continues."
  },
  {
    question: "How do environment variables work in Node.js?",
    answer: "Environment variables store configuration outside your code, like ports or passwords. Access via process.env, and use dotenv in development for .env files."
  },
  {
    question: "What are worker threads?",
    answer: "Worker threads allow CPU-intensive tasks to run in parallel without blocking the main event loop, keeping the app responsive."
  },
  {
    question: "What is Express.js and why do we use it?",
    answer: "Express is a minimal web framework for Node.js. It provides a simple, flexible structure for building web servers and APIs quickly."
  },
  {
    question: "How does routing work in Express?",
    answer: "Routing defines how your app responds to URLs. For example, a GET request to '/users' runs a specific function to handle it."
  },
  {
    question: "What is middleware in Express?",
    answer: "Middleware in Express has access to req, res, and next. It's used for tasks between receiving a request and sending a response, like authentication or parsing data."
  },
  {
    question: "Difference between global and route-level middleware?",
    answer: "Global middleware runs on every request; route-level middleware runs only for specific routes."
  },
  {
    question: "How do you parse JSON in Express?",
    answer: "Use app.use(express.json()). This middleware parses JSON request bodies into JavaScript objects automatically."
  },
  {
    question: "How do you handle errors in Express?",
    answer: "Create a middleware function with four arguments (err, req, res, next). Call next(err) anywhere to pass errors to this central handler."
  },
  {
    question: "What is Express Router and why use it?",
    answer: "Express Router is a mini-Express app to group related routes. It keeps code modular and organized instead of having all routes in one file."
  },
  {
    question: "How do you implement authentication in Express?",
    answer: "Create middleware that checks for something like a JWT in the request. If valid, call next(); otherwise, send a 401 response."
  },
  {
    question: "How do you secure an Express app?",
    answer: "Use helmet for headers, express-rate-limit for brute-force protection, validate and sanitize inputs, and store sensitive data in environment variables."
  },
  {
    question: "How do you handle file uploads in Express?",
    answer: "Use multer middleware to handle 'multipart/form-data'. It processes the file and saves it to disk or memory."
  },
  {
    question: "What is CORS and how do you enable it?",
    answer: "CORS controls which websites can access your API. Enable in Express with the cors package and configure allowed domains."
  },
  {
    question: "How do you set up environment-based configuration?",
    answer: "Use dotenv to load settings from .env in development, and set environment variables directly on the server for production."
  },
  {
    question: "How do you create custom middleware?",
    answer: "Write a function with req, res, next as parameters. Implement logic and call next() to pass control to the next middleware."
  },
  {
    question: "What is app.use() used for?",
    answer: "app.use() plugs middleware into Express, whether built-in, from npm, or custom."
  },
  {
    question: "How do you structure a scalable Express application?",
    answer: "Separate concerns into folders: routes for endpoints, controllers for logic, models for data structures, middleware for custom functions. This improves maintainability and scalability."
  }
]


};
