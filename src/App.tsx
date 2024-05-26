import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductDetail from "./pages/DetailProdPage/DetailProd";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";

const App = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/starbuck-product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
