import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <nav>
        <Link to="login">Login</Link> | <Link to="signup">Sign Up</Link> | <Link to="forgot">Forgot</Link>
      </nav>
      <div className="auth-outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
