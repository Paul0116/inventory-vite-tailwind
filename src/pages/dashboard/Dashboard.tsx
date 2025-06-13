import { useAuth } from '../../context/AuthContext';
import Header from '../../components/ui/Header';
import Sidebar from '../../components/ui/SideBar';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-white flex overflow-hidden">
      <div className=" bg-[#003e50] h-screen flex-shrink-0">
        {/* Sidebar */}
        <Sidebar />
      </div>
      <div className="flex-1 h-screen bg-white overflow-hidden w-auto">
        <Header userName={user?.name} />
        <div className="bg-gray-100 h-full overflow-auto">
          {/* Main content */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
