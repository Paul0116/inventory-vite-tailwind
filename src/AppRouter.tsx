import { useAuth } from "./context/AuthContext";
import LoginPage from "./pages/auth/LoginPage/LoginPage";
import Dashboard from "./pages/dashboard/Dashboard";

 const AppRouter = () => {
    const { isAuthenticated } = useAuth();
  
    return (
      <div>
        {isAuthenticated ? <Dashboard /> : <LoginPage />}
      </div>
    );
  };

  export default AppRouter;