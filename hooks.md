**What are React Hooks?**
With the core concepts of React review out of the way let's now learn about React Hooks and Context API.

1.  React Hooks
    React hooks allow us to just use functional components to buils React Apps without using stateful components.(Without writing a class).

- Before Hooks:
  Before the introduction of hooks, we could not use "State" and "Lifecycles Components" in functional components.
- With Hooks:
  We can now use "State and "Lifecycle Components" using React Hooks in a functional component.

Some majors hooks features widely used are "useState", "useEffect", "useContext".

**How ton use "useState" and "useEffect"**

**useState:**
`UseState` allow us to use state in functional components.

- How to use useState in a functional component:
  1. First We just import them from React as shown below.
     `import {useState} from React`
  2. Then we initialize it as show below:
     `const [name, setName] = useState(" ")`
  3. How to dynamically change State in react using `useState`?
     `setName(Todd)`

**useEffect:**

- How to use useEffect in a functional component:

The useEffect adds the ability to perform side effects from a function component. It serves the same purpose as lifecycle components such as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes.

1.  First We just import them from React as shown below.
    `import {useEffect} from React`
2.  If we want to make an API call for instance in a class based component, we usually do something like this.
    `componentDidMount() { fetch("https://api.mydomain.com" //API CALLS) }`

    With `useEffect` in a functional component we will do something like this:
    `useEffect(() => {

        fetch("https://randomuser.me/api/?results=12");

    }
    });
    `
