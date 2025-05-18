// App.js
import React from 'react';
// ↓ swap BrowserRouter → HashRouter
import { HashRouter, Routes, Route } from 'react-router-dom';

import People   from './ArchaeologicalSiteApp';
import Students from './Students';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="app-container">
        <main>
          <Routes>
            <Route path="/"         element={<People />} />
            <Route path="/people"   element={<People />} />
            <Route path="/students" element={<Students />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
