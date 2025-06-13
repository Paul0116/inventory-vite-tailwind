import {
  Home,
  Package,
  Truck,
  Users,
  Store,
  FileText,
  HelpCircle,
  Settings,
  Shield,
  Menu,
  LogOut,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function Sidebar() {
  const { logout } = useAuth();
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleLogout = () => {
    logout();
  };
  const menuItems = [
    { name: "Dashboard", icon: Home, active: true },
    { name: "Inventory", icon: Package },
    { name: "Shipment", icon: Truck },
    { name: "Customers", icon: Users },
    { name: "Store", icon: Store },
    { name: "Report", icon: FileText },
  ];

  const generalItems = [
    { name: "Help", icon: HelpCircle },
    { name: "Settings", icon: Settings },
    { name: "Privacy", icon: Shield },
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
  
    const handleResize = () => {
      setIsCollapsed(mediaQuery.matches);
    };
  
    // Initial check
    handleResize();
  
    // Listen to changes
    mediaQuery.addEventListener("change", handleResize);
  
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <div
      className={`bg-[#003e50] text-white h-screen flex flex-col transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-[280px]"
      }`}
    >
      {/* Header */}


<div className="flex items-center justify-between p-6 border-b border-gray-600">
  <div
    className={`flex items-center gap-3 transition-opacity duration-300 ${
      isCollapsed ? "opacity-0 ml-[-10px]" : "opacity-100"
    }`}
  >
    {!isCollapsed && (
      <span className="text-xl font-semibold">Inventory</span>
    )}
  </div>
  <button
    onClick={() => setIsCollapsed(!isCollapsed)}
    className="p-1 rounded transition-colors"
  >
    {isCollapsed ? (
      <X className="w-5 h-5 text-white hover:text-black hover:bg-white" />
    ) : (
      <Menu className="w-5 h-5 text-white hover:text-black hover:bg-white" />
    )}
  </button>
</div>


      {/* Menu Section */}
      <div className="flex-1 px-4 py-6">
        <div className="mb-8">
          {!isCollapsed && (
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              MENU
            </h3>
          )}
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.name === activeItem;
              return (
                <button
                  key={item.name}
                  onClick={() => setActiveItem(item.name)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors relative ${
                    isActive
                      ? "text-white hover:bg-gray-100 hover:text-black"
                      : "text-gray-300  hover:bg-gray-100 hover:text-black" 
                  } ${isCollapsed ? "justify-center" : ""}`}
                  title={isCollapsed ? item.name : ""}
                >
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r"></div>
                  )}
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <span className="font-medium ">{item.name}</span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* General Section */}
        <div>
          {!isCollapsed && (
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              GENERAL
            </h3>
          )}
          <nav className="space-y-1">
            {generalItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => setActiveItem(item.name)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors text-gray-300 hover:text-black hover:bg-gray-100 ${
                    isCollapsed ? "justify-center" : ""
                  }`}
                  title={isCollapsed ? item.name : ""}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <span className="font-medium">{item.name}</span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* User Profile */}
      <div
        className="p-4 border-t border-gray-600 cursor-pointer hover:bg-gray-100 hover:text-black transition-colors"
        onClick={handleLogout}
      >
        <div
          className={`flex items-center gap-3 hover:text-black ${
            isCollapsed ? "justify-center" : ""
          }`}
        >
          <div className="w-10 h-10 hover:text-black rounded-full bg-gradient-to-br  flex items-center justify-center flex-shrink-0">
            <LogOut className="w-5 h-5 " />
          </div>
          {!isCollapsed && (
            <div>
              <p className="font-semibold  ">Logout</p>
              <p className="text-xs text-gray-400">Sign out from account</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
