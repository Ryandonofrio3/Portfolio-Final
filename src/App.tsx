import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Hero from './components/Hero';
import About from './pages/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="mb-4 md:mb-8"><Navbar /></div>
      <div className="md:mb-8"><Hero /></div>

      {/* <Hero /> Removed margin here */}
      <div className="mb-4 md:mb-24"><About /></div>
      <div className="mb-4 md:mb-8"><Projects /></div>
      <div className="mb-4 md:mb-8"><Contact /></div>
      <Footer />
    </div>
  );
};




export default App;