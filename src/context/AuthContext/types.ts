export interface User {
    id: number;
    email: string;
    name: string;
    role: string;
  }
  
  export interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<{ success: boolean; user?: User; error?: string }>;
    logout: () => void;
    isLoading: boolean;
    isAuthenticated: boolean;
  }
  