import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Photography from './pages/Photography';
import About from './pages/About';
import Navbar from './components/Navbar';
import "../src/App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;