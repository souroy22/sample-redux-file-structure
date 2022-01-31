import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProductDetailes from '../components/products/views/ProductDetailes';
import ProductList from '../components/products/views/productList';

const RouterComp = () => {
  return (
    <Router>
        <Routes>
        <Route path="/" exact element={<ProductList />} />
        <Route path="/product/:id" exact element={<ProductDetailes />} />
        <Route>404 Not Found!</Route>
        </Routes>
    </Router>
  );
};

export default RouterComp;
