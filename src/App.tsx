import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContentsProduct from "./components/Product";
import ProductDetail from "./pages/DetailProdPage/DetailProd";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar/>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<ContentsProduct />} />
            <Route path="/starbuck-product/:id" element={<ProductDetail />} />
          </Routes>
        </Router>
    
    </>
  );
};

export default App;
