import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './public/src/app'; // Vite doesn't like this but ./src/app wasn't working

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);