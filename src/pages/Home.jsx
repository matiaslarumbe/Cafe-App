import React from 'react';
import Products from '../components/Products';
import Locations from './Locations';
import OurStory from '../components/OurStory';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';


const Home = () => {
  return (
    <main className="bg-[#F8F5F2]">
      <Products/>
      <Locations/>
      <OurStory/>
      <Testimonials/>
      <Newsletter/>

      {/* Aquí irán las demás secciones */}
    </main>
  );
};

export default Home;