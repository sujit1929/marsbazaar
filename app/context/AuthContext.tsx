'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { User } from '../../types/index.';


interface AuthContextType {
  user: User | null;
  login: (user: User, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for stored user and token in localStorage on app load
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser)); // Restore user from localStorage
    }
  }, []);

  const login = (user: User, token: string) => {
    // Store user and token in localStorage
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    setUser(user);
  };

  const logout = () => {
    // Clear localStorage and update state
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;
