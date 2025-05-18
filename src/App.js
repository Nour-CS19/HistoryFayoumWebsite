import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import People from './ArchaeologicalSiteApp';
import Students from './Students'; // Make sure this matches the actual filename (lowercase)
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/HistoryFayoumWebsite">
      <div className="app-container">
        <main>
          <Routes>
            <Route path="/" element={<People />} />
            <Route path="/people" element={<People />} />
            <Route path="/students" element={<Students />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;