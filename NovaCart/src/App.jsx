import { useState } from 'react'
import './App.css'

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import CardCarousel from './CardCarousel';
import Products from './Products';
import Related from './Related';
import AboutUs from './AboutUs';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/stories" element={<CardCarousel />} />
        <Route path="/products" element={<Products />} />
        <Route path="/related" element={<Related />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;