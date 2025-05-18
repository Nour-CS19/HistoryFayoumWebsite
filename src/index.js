// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';  // your top‑level component

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
