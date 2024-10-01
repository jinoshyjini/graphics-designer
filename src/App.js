// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Portfolio from './Pages/Portfolio';
import Brandings from './Pages/Brandings';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/designs" element={<Brandings />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
