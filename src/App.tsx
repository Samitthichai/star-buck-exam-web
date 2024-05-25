import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProductDetail from "./pages/DetailProdPage/DetailProd";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import ProductList from "./pages/Home/Containers/ProductList";


const App = () => {
  return (
    <>
      <NavBar/>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductList />} />
            <Route path="/starbuck-product/:id" element={<ProductDetail />} />
          </Routes>
        </Router>
       <Footer/>
    
    </>
  );
};

export default App;
