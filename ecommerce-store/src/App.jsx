import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Auth from './pages/Auth';
import Navbar from './components/Navbar';
import AuthLayout from './pages/AuthLayout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Profile from './pages/Profile';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/auth" element={<Auth />} />

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgot" element={<ForgotPassword />} />
        </Route>

        <Route path="/reset/:token" element={<ResetPassword />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
