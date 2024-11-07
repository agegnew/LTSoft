import React from 'react';
import { MessageSquare } from 'lucide-react';

const CommunityForums = () => {
  const forums = [
    { title: "Weapon Strategies", posts: 156, icon: <MessageSquare className="h-6 w-6 text-cyan-400" /> },
    { title: "Map Tactics", posts: 89, icon: <MessageSquare className="h-6 w-6 text-purple-400" /> },
    { title: "Team Recruitment", posts: 42, icon: <MessageSquare className="h-6 w-6 text-cyan-400" /> },
    { title: "Bug Reports", posts: 13, icon: <MessageSquare className="h-6 w-6 text-purple-400" /> }
  ];

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
          Community Forums
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {forums.map((forum, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-cyan-400">{forum.title}</h3>
                {forum.icon}
              </div>
              <p className="text-gray-300 mb-4">{forum.posts} posts</p>
              <button className="text-purple-400 hover:text-purple-300 font-semibold">
                Join Discussion
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityForums;