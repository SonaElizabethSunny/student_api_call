import React from 'react';
import { Link } from 'react-router-dom';

const ProductNavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-warning">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">ShopCart</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav flex-column">
            <li className="nav-item">
              <Link className="nav-link" to="/">View Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add">Add Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search">Search Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/delete">Delete Product</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ProductNavBar;
