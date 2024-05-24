import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductContent from './pages/product';
import Home from '../src/pages/Home/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';


const App = () => {
  return (
    <> 
    <NavBar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductContent />} />
      </Routes>
    </Router>
    </>
   
  );
}

export default App;
