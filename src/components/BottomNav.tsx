import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, MessageCircle, PieChart, User } from 'lucide-react';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Swipe' },
    { path: '/chatbot', icon: MessageCircle, label: 'Assistant' },
    { path: '/results', icon: PieChart, label: 'Résultats' },
    { path: '/profile', icon: User, label: 'Profil' }
  ];

  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-200">
      <div className="max-w-md mx-auto px-6">
        <div className="flex justify-around">
          {navItems.map(({ path, icon: Icon, label }) => {
            const isActive = location.pathname === path;
            return (
              <button
                key={path}
                onClick={() => navigate(path)}
                className={`flex flex-col items-center py-2 px-3 ${
                  isActive ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                <Icon className="h-6 w-6" />
                <span className="text-xs mt-1">{label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomNav;