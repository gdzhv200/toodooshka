// Import 'react' and 'react-dom' libraries
import React from 'react';
import ReactDOM from 'react-dom';
// Import 'TodoApp' component
import TodoApp from './App';
// Find element to render out app to
const rootElement = document.getElementById('root');
// Final render and display on page
ReactDOM.render(<TodoApp />, rootElement);