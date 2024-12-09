import React from 'react';

export default function Operations() {
  const jobs = [
    {
      title: 'Project Manager',
      description: 'Lead and coordinate major content productions',
      requirements: ['5+ years project management', 'Experience with video production', 'Strong leadership skills'],
      location: 'Los Angeles, CA',
    },
    {
      title: 'Production Coordinator',
      description: 'Coordinate day-to-day operations of video shoots',
      requirements: ['3+ years in video production', 'Strong organizational skills', 'Problem-solving ability'],
      location: 'New York, NY',
    },
    {
      title: 'Logistics Manager',
      description: 'Manage equipment and location logistics',
      requirements: ['4+ years logistics experience', 'Inventory management', 'Valid driver\'s license'],
      location: 'Miami, FL',
    },
  ];

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Operations Careers</h1>
          <p className="text-xl">Keep our productions running smoothly</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">{job.title}</h3>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {job.location}
                </span>
              </div>
              <h4 className="font-semibold mb-2">Requirements:</h4>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                {job.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
              <button className="w-full bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-300">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}