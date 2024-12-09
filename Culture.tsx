import React from 'react';

export default function Culture() {
  const values = [
    {
      title: 'Innovation',
      description: 'We push boundaries and embrace new ideas to create extraordinary content.',
      icon: '🚀',
    },
    {
      title: 'Teamwork',
      description: 'Together we achieve more. Collaboration is at the heart of everything we do.',
      icon: '🤝',
    },
    {
      title: 'Impact',
      description: 'We strive to make a positive difference in the world through our content and actions.',
      icon: '🌍',
    },
    {
      title: 'Fun',
      description: 'We believe in creating an enjoyable workplace where creativity thrives.',
      icon: '🎉',
    },
  ];

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-yellow-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Culture</h1>
          <p className="text-xl">Where creativity meets purpose</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Life at Our Company</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Team working together"
                className="rounded-lg shadow-md"
              />
              <div className="space-y-4">
                <p className="text-gray-600">
                  Our workplace is more than just an office - it's a creative hub where ideas come to life. We foster an environment of collaboration, innovation, and fun.
                </p>
                <p className="text-gray-600">
                  Every day brings new challenges and opportunities to make an impact. We celebrate our successes together and learn from our failures as a team.
                </p>
                <p className="text-gray-600">
                  Join us in creating content that entertains, inspires, and makes a difference in people's lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}