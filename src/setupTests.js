/// Importing custom matchers from jest-dom for testing in the DOM
// jest-dom is an extension for Jest that adds custom matchers to Jest's expect function.
// These matchers are specifically designed to make assertions about DOM nodes in a more readable way.
import "@testing-library/jest-dom";

// Usage example of jest-dom matchers:
// You can now use custom matchers to assert on DOM nodes, which enhances the testing experience.
// For instance, you can check if a particular element contains specific text content:
// expect(element).toHaveTextContent(/react/i);

// This makes it easier to write tests that are both expressive and maintainable,
// focusing on how the user interacts with the application rather than implementation details.
// For further information on available matchers and how to use them, visit:
// https://github.com/testing-library/jest-dom
