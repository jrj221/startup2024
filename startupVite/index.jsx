import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './src/app'; // Vite doesn't like this but ./src/app wasn't working
import { getWeather } from './service/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
getWeather();