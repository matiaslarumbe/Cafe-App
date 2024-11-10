import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Locations from './pages/Locations';
import Jobs from './pages/Jobs';
import Carrito from './pages/Carrito';
import Navbar from './components/NavBar';
import TopNavbar from './components/TopNavbar';

// Componente wrapper para manejar la lógica de los Navbars
const AppContent = () => {
  const location = useLocation();
  const currentPath = location.pathname.slice(1);
  
  // Lógica para mostrar los diferentes navbars
  const showFloatingNavbar = !['menu', 'carrito'].includes(currentPath);
  const showTopNavbar = ['carrito'].includes(currentPath);

  return (
    <>
      {showFloatingNavbar && <Navbar />}
      {showTopNavbar && <TopNavbar />}
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