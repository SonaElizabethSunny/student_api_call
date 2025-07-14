import React, { useEffect, useState } from 'react';
import ProductNavBar from './ProductNavBar';
import axios from 'axios';

const ViewAllProduct = () => {
  const [productData, setProductData] = useState({ products: [] });

  const fetchData = () => {
    axios
      .get('https://dummyjson.com/products')
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch products:', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="container mt-4">
        <h3 className="mb-4">View All Products</h3>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Thumbnail</th>
            </tr>
          </thead>
          <tbody>
            {productData.products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>₹ {product.price}</td>
                <td>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllProduct;
