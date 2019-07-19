# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
    ReactJS is a modular javascript framework that speeds up pageload by only rendering DOM elements that change instead of re-rendering the entire DOM. the way it does that also allows for reusable components that can be changed in a single location instead of hunting through thousands of lines of copy/pasted code. 

1. What does it mean to think in react?
    This is about a state of mind when developing in react. when you begin crafting a react application it helps to go in with a plan. think about what you need displayed on the screen, which information would change on any interaction (if any) and how would you need that information to pass through to each individual element. how would you name elements and variables and functions in order to assist you when you need to go back to the code later on.

1. Describe state.
    state is essentially the current instance of information on the DOM. what do your buttons say? what does your text content look like? which order are your elements in? React deals a lot with changing the current way a website exists on the DOM and that means changing state. 

1. Describe props.
    props are, basically, information passed from one element or function to another to assist with state changes. 


1. What are side effects, and how do you sync effects in a React component to state or prop changes?
    side effects are when your react app interacts with information on your page outside the scope of the React, like having an event listener on window elements for example, or pulling in information from an outside API. you can sync effects in react to state or prop changes using the useEffect method.