"use client";
import { createContext, useState, useEffect, ReactNode } from 'react';
import api from "@/utils/api";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on mount
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await api.get('/auth/me');
          setUser(response.data.user);
        }
      } catch (error) {
        localStorage.removeItem('token');
        console.error('Auth check failed:', error);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const signup = async (name: string, email: string, password: string) => {
    try {
      const response = await api.post("/auth/signup", { name, email, password });
      setUser(response.data.user);
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw error;
      }
      // Handle Axios errors
      const axiosError = error as { response?: { data?: { message?: string } } };
      throw new Error(axiosError.response?.data?.message || 'Signup failed');
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post("/auth/login", { email, password });
      setUser(response.data.user);
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw error;
      }
      // Handle Axios errors
      const axiosError = error as { response?: { data?: { message?: string } } };
      throw new Error(axiosError.response?.data?.message || 'Login failed');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}