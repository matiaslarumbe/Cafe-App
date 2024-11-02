import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
// import About from './pages/About';
import Navbar from './components/NavBar';
import Menu from './pages/Menu'
import Footer from './components/Footer';
import Jobs from './pages/Jobs'
import Locations from './pages/Locations';
import Carrito from './pages/Carrito';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

// https://botanical.framer.website/