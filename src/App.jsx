import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import OverviewPage from './pages/OverviewPage';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-soviet-offwhite min-h-screen relative">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<OverviewPage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
