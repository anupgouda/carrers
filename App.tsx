import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Creative from './pages/careers/Creative';
import Technology from './pages/careers/Technology';
import Operations from './pages/careers/Operations';
import Marketing from './pages/careers/Marketing';
import Story from './pages/about/Story';
import Culture from './pages/about/Culture';
import Benefits from './pages/about/Benefits';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers/creative" element={<Creative />} />
          <Route path="/careers/technology" element={<Technology />} />
          <Route path="/careers/operations" element={<Operations />} />
          <Route path="/careers/marketing" element={<Marketing />} />
          <Route path="/about/story" element={<Story />} />
          <Route path="/about/culture" element={<Culture />} />
          <Route path="/about/benefits" element={<Benefits />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;