// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App'; // Import the Hello component

const container = document.getElementById('root'); // This should match the id in your public/index.html
ReactDOM.createRoot(container).render(<Hello />);
