// frontend/src/pages/Shop.jsx
import { useState, useEffect } from 'react';
import api from '../services/api.js';

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/api/products').then(res => setProducts(res.data));
  }, []);

  const addToCart = (productId) => {
    api.post('/api/cart', { productId });
    alert('Added to cart!');
  };

  return (
    <div>
      <h1>Shop</h1>
      {products.map(p => (
        <div key={p._id} style={{ border: '1px solid #ccc', margin: 10, padding: 10 }}>
          <h3>{p.name}</h3>
          <p>R{p.price}</p>
          <button onClick={() => addToCart(p._id)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}