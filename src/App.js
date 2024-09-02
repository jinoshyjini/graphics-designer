import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {Routes, Route } from 'react-router-dom';
import Portfolio from './Pages/Portfolio';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;