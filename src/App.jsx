import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Locations from './pages/Locations';
import Jobs from './pages/Jobs';
import Carrito from './pages/Carrito';
import Navbar from './components/NavBar';

// Componente wrapper para manejar la lógica del Navbar
const AppContent = () => {
  const location = useLocation();
  const showNavbar = !['menu', 'carrito'].includes(location.pathname.slice(1));

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
// https://botanical.framer.website/