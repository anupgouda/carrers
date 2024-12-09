import React from 'react';

export default function Creative() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Creative Careers</h1>
          <p className="text-xl">Join our creative team and bring ideas to life</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Video Editor',
              description: 'Edit viral videos that reach millions',
              requirements: ['3+ years editing experience', 'Proficiency in Adobe Premiere Pro', 'Strong storytelling skills'],
            },
            {
              title: 'Thumbnail Designer',
              description: 'Create engaging thumbnails that drive views',
              requirements: ['Portfolio of design work', 'Experience with Photoshop', 'Understanding of YouTube trends'],
            },
            {
              title: 'Content Writer',
              description: 'Write compelling scripts and content',
              requirements: ['Strong writing portfolio', 'Understanding of viral content', 'Creativity and humor'],
            },
          ].map((job, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">{job.title}</h3>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <h4 className="font-semibold mb-2">Requirements:</h4>
              <ul className="list-disc list-inside text-gray-600">
                {job.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
              <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}