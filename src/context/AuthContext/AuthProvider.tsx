import React, { useState, type ReactNode } from "react";
import AuthContext from "./AuthContext";
import type { AuthContextType, User } from "./types";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = async (email: string, password: string): Promise<{ success: boolean; user?: User; error?: string }> => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call

      if (email == "admin@email.com" && password == "admin123") {
        const userData: User = {
          id: 1,
          email,
          name: email.split('@')[0],
          role: 'admin',
        };
        setUser(userData);
        return { success: true, user: userData };
      }

      throw new Error('Invalid credentials');
    } catch (error: any) {
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    isLoading,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
