My React Practice Projects 🚀
A repo for all my React practice code.

1. Lifting State Up
Concept: A common React pattern where the state is "lifted" to the nearest common parent to share it between sibling components.

My Code: The state lives in LiftState.jsx and is shared between InputComponent.jsx and DisplayComponent.jsx.

- [View Code](src/lifting-state)

2. Toggler Button
Concept: A simple UI component to handle on/off states, built using Tailwind CSS for styling.

My Code: The component is named TogglerButton.jsx and is located inside the Toggler folder.

- [View Code](src/Toggler)

3. useRef for Uncontrolled Forms
Concept: This project shows how to use the useRef hook to create an uncontrolled form. The form's data is read directly from the DOM on submit, instead of being managed by React state.

- [View Code](src/components/UseRef.jsx)

4. useContext for Prop Drilling
Concept: This project demonstrates the useContext hook, which solves the "prop drilling" problem. It allows you to pass data through the component tree without having to manually pass props down through every level.

-[View Code](src/components/UseContext.jsx)

5. - `useReducer` Hook

Today I learned about React's **`useReducer`** hook.  
It works like `useState` for storing and updating state, but instead of directly setting the value, you send actions to a reducer function.  
This approach keeps update logic organized and is especially useful when managing complex or multi-step state changes.

-[View Code](src/components/UseReducer.jsx)