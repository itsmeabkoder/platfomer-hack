import React from 'react';
import { Navigate } from 'react-router-dom';

function Auth() {
  // keep old /auth route working by redirecting to login
  return <Navigate to="/auth/login" replace />;
}

export default Auth;
