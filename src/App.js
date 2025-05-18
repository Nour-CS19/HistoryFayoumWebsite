import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import People from './ArchaeologicalSiteApp';
import Images from './images';
import './App.css';

function App() {
  return (
    <Router>
      {/* No basename needed with HashRouter */}
      <div className="app-container">
        <main>
          <Routes>
            <Route path="/" element={<People />} />
            <Route path="/people" element={<People />} />
            <Route path="/images" element={<Images />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;