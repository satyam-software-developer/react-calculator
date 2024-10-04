// reportWebVitals function definition
const reportWebVitals = (onPerfEntry) => {
  // Check if onPerfEntry is defined and is a function
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import the web-vitals library
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Call each web vitals metric function with the onPerfEntry callback function
      getCLS(onPerfEntry); // Cumulative Layout Shift: Measures layout shifts that occur during the lifespan of the page.
      getFID(onPerfEntry); // First Input Delay: Measures the time from when a user first interacts with your site to the time when the browser is able to respond to that interaction.
      getFCP(onPerfEntry); // First Contentful Paint: Measures the time from when the page starts loading to when any part of the page's content is rendered on the screen.
      getLCP(onPerfEntry); // Largest Contentful Paint: Measures the time it takes for the largest content element visible within the viewport to be fully rendered.
      getTTFB(onPerfEntry); // Time to First Byte: Measures the time it takes for the browser to receive the first byte of the response from the server.
    });
  }
};

// Exporting the reportWebVitals function as the default export
export default reportWebVitals;
