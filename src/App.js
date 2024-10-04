//GETTING app.css
import "./App.css";
// Importing the global styles for the application from "App.css".

//GETTING CALCULATOR COMPONENT
import Calculator from "./component/calculator.jsx";
// Importing the Calculator component from the specified path, which will be responsible for rendering the calculator interface and buttons.

//GETTING HOOKS
import { useState } from "react";
// Importing the `useState` hook from React. This will be used to manage and track the state of the calculator (i.e., the input and result displayed).

//GETTING HELMET FOR APP NAME AND DESCRIPTION
import { Helmet } from "react-helmet";
// Importing the `Helmet` component, which allows us to manage and modify the content of the <head> tag of our HTML document, like setting the page title and meta tags.

// Importing mathjs for safe calculation
import { evaluate } from "mathjs";
// Importing the `evaluate` function from the mathjs library, which helps safely evaluate mathematical expressions entered by the user, providing an alternative to the dangerous `eval()` function.

function App() {
  //making state to view value in screen and set
  const [result, setResult] = useState("");

  // `result` is a state variable that will hold the current input or output of the calculator (i.e., what is displayed on the screen).
  // `setResult` is the function used to update the `result` state.
  // The initial value of `result` is set to an empty string, meaning that the calculator starts with a blank screen.

  //function for clear screen
  const handleClear = () => {
    setResult("");
  };

  // `handleClear` is a function that clears the calculator screen by resetting the `result` state to an empty string.
  // It is triggered when the "C" (clear) button is clicked.

  //function to calculate the given value on screen
  const calculate = () => {
    try {
      // Use mathjs's evaluate instead of eval()
      setResult(evaluate(result.toString()));
    } catch (error) {
      setResult("Error!");
      setTimeout(() => {
        setResult("");
      }, 2000);
    }
  };

  // `calculate` is a function that evaluates the mathematical expression entered by the user using the `evaluate` function from mathjs.
  // If the evaluation is successful, it updates the `result` state with the calculated result.
  // If an error occurs (e.g., invalid expression), the `result` is temporarily set to "Error!" for 2 seconds before clearing the screen.

  //function for getting values of button clicks
  const handleClick = (e) => {
    try {
      setResult(result.concat(e.target.value));
    } catch {
      setResult(e.target.value);
    }
  };

  // `handleClick` is a function that handles input when a calculator button is clicked (e.g., a number or operator).
  // It appends the clicked button's value (retrieved via `e.target.value`) to the current `result` string.
  // If any issue occurs (e.g., `result` is undefined), it sets the `result` to the clicked button's value directly.

  //function for adding or removing "-" before the number
  const handleMinus = () => {
    try {
      if (result.startsWith("-")) {
        setResult(result.substring(1));
      } else {
        setResult("-" + result);
      }
    } catch {
      setResult(result);
    }
  };

  // `handleMinus` is a function that toggles a minus sign before the current number on the screen.
  // If the current `result` starts with a minus sign, the minus sign is removed (positive value).
  // If the current `result` does not have a minus sign, it adds one (negative value).

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Calculator</title>
        <meta
          name="description"
          content="This is a Simple Calculator handle some features like: addition, substraction, etc."
        />
      </Helmet>
      {/* 
      The Helmet component is used to set the page's title and meta description dynamically.
      - <title>: Sets the title of the webpage to "Calculator".
      - <meta name="description">: Provides a brief description of the app for SEO purposes.
      */}

      <Calculator
        result={result}
        calculate={calculate}
        handleClear={handleClear}
        handleClick={handleClick}
        handleMinus={handleMinus}
      />
      {/* 
      Rendering the `Calculator` component and passing the following props to it:
      - `result`: The current input/result displayed on the screen.
      - `calculate`: The function that calculates the result when the user clicks the equals button.
      - `handleClear`: The function that clears the screen.
      - `handleClick`: The function that handles user input when buttons are clicked.
      - `handleMinus`: The function that toggles the minus sign before the current number.
      */}
    </>
  );
}

export default App;

// Exporting the `App` component as the default export of this module, so it can be imported and rendered in other parts of the application.
