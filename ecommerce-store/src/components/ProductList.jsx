import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onAdd }) => {
  return (
    <div className="product-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default ProductList;
