import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductCatalog from './pages/ProductCatalogPage';
// import ShoppingCart from './pages/ShoppingCart';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path="/catalog" element={<ProductCatalog />} />
        {/* <Route path="/cart" element={<ShoppingCart />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
