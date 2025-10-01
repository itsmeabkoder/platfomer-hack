import React, { createContext, useContext, useState, useEffect } from 'react';
import authService from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = authService.getCurrentUser();
    if (stored) setUser(stored);
  }, []);

  const login = async (email, password) => {
    const u = await authService.login(email, password);
    setUser(u);
    return u;
  };

  const signup = async (payload) => {
    const u = await authService.signup(payload);
    setUser(u);
    return u;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
