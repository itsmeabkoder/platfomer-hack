import React from 'react';

const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => onAdd && onAdd(product)}>Add to cart</button>
    </div>
  );
};

export default ProductCard;
