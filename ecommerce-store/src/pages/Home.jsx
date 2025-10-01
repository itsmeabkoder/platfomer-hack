import React from 'react';
import ProductList from '../components/ProductList';
import { products } from '../data/products';

const Home = () => {
  const featured = products.slice(0, 4);

  const handleAdd = (product) => {
    console.log('Add to cart from home:', product);
    alert(`${product.name} added to cart (mock)`);
  };

  return (
    <div>
      <header style={{ padding: '2rem', textAlign: 'center', background: '#f5f5f5' }}>
        <h1>Welcome to Platformer Store</h1>
        <p>Your one-stop shop for curated goods.</p>
        <a href="/products">Browse all products</a>
      </header>

      <section style={{ padding: '1rem' }}>
        <h2>Featured products</h2>
        <ProductList products={featured} onAdd={handleAdd} />
      </section>

      <footer style={{ marginTop: '2rem', padding: '1rem', background: '#eee', textAlign: 'center' }}>
        <p>&copy; {new Date().getFullYear()} Platformer Store</p>
      </footer>
    </div>
  );
};

export default Home;
