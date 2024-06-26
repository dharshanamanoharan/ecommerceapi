import React from'react';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import Header from './Components/Header';
import Footer from './Components/Footer';
function App() {
  return (
   <>
   <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
    </Routes>
    <Footer />
   </BrowserRouter>
   </>
  );
}

export default App;
