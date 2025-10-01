import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import productsData from '../data/products';

const Products = () => {
  const [products] = useState(productsData);

  const handleAdd = (product) => {
    console.log('Add to cart:', product);
    alert(`${product.name} added to cart (mock)`);
  };

  return (
    <div>
      <h2>Products</h2>
      <ProductList products={products} onAdd={handleAdd} />
    </div>
  );
};

export default Products;
