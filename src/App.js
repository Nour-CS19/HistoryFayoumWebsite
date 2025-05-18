import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import People from './ArchaeologicalSiteApp';
import Images from './images';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <main>
          <Routes>
            {/* Index route */}
            <Route path="/" element={<People />} />

            {/* Other routes */}
            <Route path="/people" element={<People />} />
            <Route path="/images" element={<Images />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
