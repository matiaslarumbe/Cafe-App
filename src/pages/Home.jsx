import React from 'react';
import Products from '../components/Products';
import Locations from './Locations';
import OurStory from '../components/OurStory';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Hero from '../components/Hero';
import LocationsPreview from '../components/LocationsPreview';


const Home = () => {
  return (
    <main className="bg-[#F8F5F2]">
      <Hero/>
      <Products/>
      <LocationsPreview/>
      <OurStory/>
      <Testimonials/>
      <Newsletter/>

      
    </main>
  );
};

export default Home;