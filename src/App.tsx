import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductContent from './pages/Product';
import Home from '../src/pages/Home/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Filter from './components/Filter';
import DetailPage from './components/DetailProd';
import ProductDetail from './components/DetailProd';


const App = () => {
  return (
    <> 
    <NavBar/>
    <Router>
    
      <Routes>
        
        <Route path="/" element={<Home />} />
        
        {/* <Route path="/product" element={<ProductContent />} /> */}
        {/* <Route path='/product/:id' element={<ProductDetail  />} ></Route> */}
      </Routes>
    </Router>
    </>
   
  );
}

export default App;
