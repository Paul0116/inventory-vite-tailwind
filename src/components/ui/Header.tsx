// src/components/ui/Header.tsx
import { Search, Settings, Bell, Mail, Plus } from 'lucide-react';

interface HeaderProps {
  userName?: string;
}

export default function Header({ userName = 'User' }: HeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-white border-b border-gray-200 gap-3 sm:gap-0">
      {/* Left side with Hello and Search on small screens */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 flex-shrink-0 w-full sm:w-auto">
        <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
          Hello {userName}
        </h1>

        {/* Show search under Hello on sm and md */}
        <div className="block sm:hidden mt-1 w-full">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search here"
              className="w-full pl-8 pr-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Center search bar for md+ screens */}
      <div className="hidden sm:flex flex-1 max-w-sm sm:max-w-md mx-2 sm:mx-4 lg:mx-8">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
          <input
            type="text"
            placeholder="Search here"
            className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 text-sm sm:text-base bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Right side icons and button */}
      <div className="flex flex-col lg:flex-row items-center gap-y-2 lg:gap-y-0 gap-1 sm:gap-2 lg:gap-4 flex-shrink-0">
  <div className="flex items-center gap-1 sm:gap-2 lg:gap-4">
    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
      <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
    </button>
    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
      <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
    </button>
    <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
        3
      </span>
    </button>
  </div>

  <button className="flex items-center gap-1 bg-gray-100 sm:gap-2 border border-gray-200 text-gray-800 px-2 sm:px-3 lg:px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base">
    <span>Add New Product</span>
    <div className="bg-black p-1 rounded-full">
      <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
    </div>
  </button>
</div>

    </div>
  );
}

