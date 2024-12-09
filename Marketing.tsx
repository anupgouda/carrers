import React from 'react';

export default function Marketing() {
  const jobs = [
    {
      title: 'Social Media Manager',
      description: 'Drive engagement across social platforms',
      requirements: ['4+ years social media management', 'Content strategy experience', 'Analytics expertise'],
      platforms: ['YouTube', 'Instagram', 'TikTok', 'Twitter'],
    },
    {
      title: 'Brand Partnerships Manager',
      description: 'Develop and manage brand collaborations',
      requirements: ['5+ years partnership management', 'Negotiation skills', 'Network of contacts'],
      platforms: ['Sponsorships', 'Collaborations', 'Events'],
    },
    {
      title: 'Digital Marketing Specialist',
      description: 'Optimize and grow our digital presence',
      requirements: ['3+ years digital marketing', 'SEO expertise', 'Data analysis skills'],
      platforms: ['Google Analytics', 'SEO', 'Email Marketing'],
    },
  ];

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-pink-600 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Marketing Careers</h1>
          <p className="text-xl">Shape our brand and drive growth</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">{job.title}</h3>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Platforms:</h4>
                <div className="flex flex-wrap gap-2">
                  {job.platforms.map((platform, i) => (
                    <span key={i} className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">
                      {platform}
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
              <button className="w-full bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition duration-300">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}