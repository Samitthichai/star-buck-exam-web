import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ProductDetail from "./pages/DetailProdPage/DetailProduction";
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
