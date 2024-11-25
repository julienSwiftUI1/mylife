import React from 'react';
import TinderCard from 'react-tinder-card';
import { X, Heart, Pause, Volume2, Mic } from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: 'Développeur Web',
    video: 'https://example.com/dev-web.mp4',
    description: 'Créez des sites web et des applications'
  },
  {
    id: 2,
    title: 'Designer UX/UI',
    video: 'https://example.com/designer.mp4',
    description: 'Concevez des interfaces utilisateur intuitives'
  }
];

const SwipePage = () => {
  const onSwipe = (direction: string, jobId: number) => {
    console.log('You swiped: ' + direction + ' on job: ' + jobId);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="relative h-[600px]">
        {jobs.map((job) => (
          <TinderCard
            key={job.id}
            onSwipe={(dir) => onSwipe(dir, job.id)}
            preventSwipe={['up', 'down']}
            className="absolute"
          >
            <div className="relative w-full h-[500px] rounded-2xl bg-white shadow-lg overflow-hidden">
              <div className="absolute top-4 right-4 space-y-2 z-10">
                <button className="p-2 rounded-full bg-white shadow-md">
                  <Volume2 className="h-6 w-6 text-gray-700" />
                </button>
                <button className="p-2 rounded-full bg-white shadow-md">
                  <Mic className="h-6 w-6 text-gray-700" />
                </button>
              </div>
              
              <video
                className="w-full h-full object-cover"
                src={job.video}
                loop
                muted
              />
              
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6">
                <h2 className="text-2xl font-bold text-white">{job.title}</h2>
                <p className="text-white mt-2">{job.description}</p>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>

      <div className="flex justify-center space-x-4 mt-4">
        <button className="p-4 rounded-full bg-white shadow-lg">
          <X className="h-8 w-8 text-red-500" />
        </button>
        <button className="p-4 rounded-full bg-white shadow-lg">
          <Pause className="h-8 w-8 text-gray-700" />
        </button>
        <button className="p-4 rounded-full bg-white shadow-lg">
          <Heart className="h-8 w-8 text-green-500" />
        </button>
      </div>
    </div>
  );
};

export default SwipePage;