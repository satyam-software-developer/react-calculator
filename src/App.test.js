// Import necessary functions from the testing library
import { render, screen } from "@testing-library/react";
// `render` is used to render a React component into a virtual DOM (provided by the testing library) for testing purposes.
// `screen` is a utility provided by the testing library that helps query elements in the rendered component.

import App from "./App";
// Importing the `App` component, which is the main component of the application. This component will be rendered and tested.

test("renders learn react link", () => {
  // Defining a test case with a description 'renders learn react link'.
  // The description should explain what the test is checking. In this case, it's checking if the "learn react" link is rendered.

  render(<App />);
  // Renders the `App` component using the `render` function.
  // This function simulates rendering the component into a virtual DOM environment, allowing you to test its output without needing a browser.

  const linkElement = screen.getByText(/learn react/i);
  // Using `screen.getByText` to find an element that contains the text "learn react".
  // The `/learn react/i` is a regular expression that performs a case-insensitive search for the text "learn react".
  // The result is stored in the variable `linkElement`.

  expect(linkElement).toBeInTheDocument();
  // Using the `expect` function to assert that the `linkElement` is present in the rendered component's virtual DOM.
  // The matcher `.toBeInTheDocument()` checks if the element exists in the document, i.e., it's rendered on the screen.
});
