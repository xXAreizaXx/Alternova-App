// ReactJS
import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import App from 'App';

// Context
import ShoppingProvider from 'context/ShoppingContext';

// Styles
import 'index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShoppingProvider>
      <App />
    </ShoppingProvider>
  </React.StrictMode>
);
