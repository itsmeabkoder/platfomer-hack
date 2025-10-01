import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/products">Products</Link> | <Link to="/cart">Cart</Link> | {
        user ? (
          <>
            <Link to="/profile">Profile</Link> | <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/auth/login">Login</Link>
        )
      }
    </nav>
  );
}

export default Navbar;
