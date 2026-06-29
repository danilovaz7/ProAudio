import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Gallery from './sections/Gallery'; 
import About from './sections/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-50 font-sans antialiased selection:bg-red-600 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Gallery /> 
        <About />
      </main>

      <Footer />
    </div>
  );
}

export default App;