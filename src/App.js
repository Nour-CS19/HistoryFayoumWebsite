import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import People from './ArchaeologicalSiteApp';
import Images from './images';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/HistoryFayoumWebsite">
      <div className="app-container">
        <main>
          <Routes>
            <Route path="/" index element={<People />} />
            <Route path="/people" element={<People />} />
            <Route path="/images" element={<Images />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
