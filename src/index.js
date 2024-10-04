import React from "react";
// Imports the React library, which is necessary for creating React components and managing state.

import ReactDOM from "react-dom/client";
// Imports the ReactDOM library specifically for rendering React components to the DOM.
// The 'client' module is used in React 18 for new concurrent features.

import "./index.css";
// Imports the global CSS file for styling the entire application. This can include styles that affect all components.

import App from "./App";
// Imports the main App component from the App.js file. This component will serve as the root of the application's component tree.

import reportWebVitals from "./reportWebVitals";
// Imports a utility for measuring performance in the application. This can be used to gather metrics for performance monitoring.

const root = ReactDOM.createRoot(document.getElementById("root"));
// Selects the DOM element with the ID of 'root' and creates a React root to render the app into.
// This is where the entire React component tree will be mounted.

root.render(
  <React.StrictMode>
    {/* React.StrictMode is a tool for highlighting potential problems in an application. 
        It activates additional checks and warnings for its descendants. */}
    <App />
    {/* Renders the App component within StrictMode. This means any issues in the App or its child components 
        will be flagged during development, but it will not affect production builds. */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// Calls the reportWebVitals function, which can be configured to log or send performance metrics
// to an analytics endpoint. This is useful for tracking the app's performance in production.
