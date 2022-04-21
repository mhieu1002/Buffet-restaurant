import React from 'react';
import { createRoot } from 'react-dom/client'
import reportWebVitals from './reportWebVitals';
import App from './App';
import './scss/index.scss'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

reportWebVitals();
