// frontend/src/components/auth/LoginForm.jsx
import { useState } from 'react';
import api from '../services/api.js';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/shop');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20 }}>
      <h2>Login</h2>
      <input
        placeholder="Email"
        value={formData.email}
        onChange={e => setFormData({ ...formData, email: e.target.value })}
        style={{ display: 'block', margin: '10px 0', width: '100%', padding: 8 }}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={e => setFormData({ ...formData, password: e.target.value })}
        style={{ display: 'block', margin: '10px 0', width: '100%', padding: 8 }}
      />
      <button type="submit">Login</button>
    </form>
  );
}