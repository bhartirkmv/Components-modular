import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { NavigationProvider } from './context/navigation';



import App from './App';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

// We are wrapping our App component inside the provider
// So, that all the subcomponents can get access to the context.

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
  
);