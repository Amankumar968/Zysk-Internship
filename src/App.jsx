import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Resources from "./pages/Resources";
import Footer from './Components/Footer'
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
    
      <Navbar />

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/price" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
