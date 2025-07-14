import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductNavBar from './components/ProductNavBar.jsx';
import ViewAllProduct from './components/ViewAllProduct.jsx';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';
import DeleteProduct from './components/DeleteProduct';


function App() {
  return (
    <BrowserRouter>
      <ProductNavBar />
      <Routes>
        <Route path="/" element={<ViewAllProduct />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/search" element={<SearchProduct />} />
        <Route path="/delete" element={<DeleteProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
