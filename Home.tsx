import React from 'react';
import Hero from '../components/Hero/Hero';

export default function Home() {
  const positions = [
    {
      title: 'Senior Software Engineer',
      department: 'Technology',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'Content Creator',
      department: 'Creative',
      location: 'Los Angeles',
      type: 'Full-time',
    },
    {
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'New York',
      type: 'Full-time',
    },
  ];

  return (
    <div>
      <Hero />
      
      <section id="positions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Open Positions</h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Department: {position.department}</p>
                  <p>Location: {position.location}</p>
                  <p>Type: {position.type}</p>
                </div>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}