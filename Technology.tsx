import React from 'react';

export default function Technology() {
  const jobs = [
    {
      title: 'Senior Full Stack Developer',
      description: 'Lead development of our next-generation platform',
      requirements: ['7+ years experience', 'React & Node.js expertise', 'System architecture experience'],
      stack: ['React', 'Node.js', 'TypeScript', 'AWS'],
    },
    {
      title: 'Mobile App Developer',
      description: 'Build innovative mobile experiences',
      requirements: ['5+ years mobile development', 'React Native expertise', 'Performance optimization'],
      stack: ['React Native', 'TypeScript', 'Redux', 'Firebase'],
    },
    {
      title: 'DevOps Engineer',
      description: 'Scale and maintain our infrastructure',
      requirements: ['5+ years DevOps experience', 'CI/CD expertise', 'Cloud infrastructure'],
      stack: ['AWS', 'Kubernetes', 'Docker', 'Terraform'],
    },
  ];

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Technology Careers</h1>
          <p className="text-xl">Build the future of digital entertainment</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">{job.title}</h3>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {job.stack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <h4 className="font-semibold mb-2">Requirements:</h4>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                {job.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}