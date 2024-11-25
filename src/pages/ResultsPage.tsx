import React from 'react';
import { Trophy, Book, TrendingUp } from 'lucide-react';

const ResultsPage = () => {
  const stats = {
    level: 'Intermédiaire',
    swipedJobs: 45,
    likedJobs: 28,
    topCategories: ['Technologie', 'Design', 'Marketing'],
    recommendedSubjects: ['Mathématiques', 'Informatique', 'Communication']
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
        <div className="flex items-center mb-4">
          <Trophy className="h-8 w-8 text-yellow-500" />
          <div className="ml-3">
            <h2 className="text-xl font-bold">Niveau {stats.level}</h2>
            <p className="text-gray-600">Continue à explorer pour progresser !</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600">Métiers explorés</p>
            <p className="text-2xl font-bold">{stats.swipedJobs}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600">Métiers aimés</p>
            <p className="text-2xl font-bold">{stats.likedJobs}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <TrendingUp className="h-5 w-5 mr-2" />
          Catégories préférées
        </h3>
        <div className="space-y-2">
          {stats.topCategories.map((category, index) => (
            <div key={index} className="flex items-center">
              <div className="h-2 bg-blue-500 rounded" style={{ width: `${100 - (index * 20)}%` }} />
              <span className="ml-3 text-gray-600">{category}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Book className="h-5 w-5 mr-2" />
          Matières recommandées
        </h3>
        <div className="flex flex-wrap gap-2">
          {stats.recommendedSubjects.map((subject, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {subject}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;