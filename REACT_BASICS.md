**Some Basics About React**:
We're uniquely going to learn about React Hooks today. We will learn about Context API later on but before we dive deep into Hooks, let's review some core concepts of the React ecosystem to better understand the "WHY" React Hooks and Context API have been added to the React library or framework.

**Stateful and Stateless Components:**

1.  Stateful Components:
    Stateful Components are components that allow us to use a class in our React application. Those class components use state and lifecycle components(We will learn about life cycle component soon)
2.  Stateless Components:
    Stateless Components or functional components allow us to just use pure functions in our react apps. They don't use class.
    Note: Before the introduction of React Hooks which we will talk about later, we could not use state and lifecycle components in stateless or functional components.

**What's Props in react?:**
Props in React are properties that can be passed from one component to another.

Example:

`const element = <Welcome name="Cayce" />;`

```function Welcome(props) {
  return <h1>{props.name}</h1>;
}
```

=> This results give us `Welcome Cayce`

**What's State in react?:**
State is an object that describes the state of our application. It allows us to create components that are dynamic and interactive.

- Initialization of state in a react app:

`this.state = {[name: ""]}`

**How to dynamically change State in react?:**
We do that by using `setState`.

`this.setState: ({name: "Todd"})`

**Lifecycles Components**
Lifecycles methods can be defined as the series of methods that are invoked in different stages of a component’s existence. Some examples of those methods are:

- componentDidMount, render when the component is mounting...
- componentWillReceiveProps, componentDidUpdate when the component is updating...
- componentWillUnmount when the component is unmounting...
