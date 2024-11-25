import React from 'react';
import { Edit2, Star, Shield, Award } from 'lucide-react';

const ProfilePage = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=faces"
              alt="Profile"
              className="h-20 w-20 rounded-full"
            />
            <div className="ml-4">
              <h2 className="text-xl font-bold">Thomas Martin</h2>
              <p className="text-gray-600">Lycéen en Terminale</p>
            </div>
          </div>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Edit2 className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold mb-4">Abonnement Premium</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-bold">Premium</h4>
                <Star className="h-6 w-6" fill="white" />
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Accès illimité aux vidéos
                </li>
                <li className="flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Assistant IA personnalisé
                </li>
              </ul>
              <button className="w-full bg-white text-purple-600 py-2 rounded-lg font-semibold">
                S'abonner pour 9,99€/mois
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Paramètres</h3>
        <div className="space-y-4">
          <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
            <span>Notifications</span>
            <span className="text-gray-400">→</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
            <span>Confidentialité</span>
            <span className="text-gray-400">→</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
            <span>Aide</span>
            <span className="text-gray-400">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;