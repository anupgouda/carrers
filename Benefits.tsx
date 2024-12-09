import React from 'react';

export default function Benefits() {
  const benefits = [
    {
      category: 'Health & Wellness',
      items: [
        'Comprehensive health insurance',
        'Dental and vision coverage',
        'Mental health support',
        'Gym membership reimbursement',
      ],
    },
    {
      category: 'Time Off',
      items: [
        'Unlimited PTO',
        'Paid holidays',
        'Paid parental leave',
        'Sabbatical program',
      ],
    },
    {
      category: 'Growth',
      items: [
        'Learning & development budget',
        'Conference attendance',
        'Mentorship programs',
        'Career advancement opportunities',
      ],
    },
    {
      category: 'Perks',
      items: [
        'Remote work flexibility',
        'Latest tech equipment',
        'Team events & activities',
        'Free snacks & beverages',
      ],
    },
  ];

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Benefits & Perks</h1>
          <p className="text-xl">We take care of our team</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4 text-emerald-600">{benefit.category}</h3>
              <ul className="space-y-3">
                {benefit.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Additional Perks</h2>
          <div className="grid gap-8 md:grid-cols-3 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">100%</div>
              <div className="text-gray-600">Healthcare Coverage</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">$5000</div>
              <div className="text-gray-600">Learning Budget</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">∞</div>
              <div className="text-gray-600">Vacation Days</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}