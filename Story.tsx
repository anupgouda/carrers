import React from 'react';

export default function Story() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Story</h1>
          <p className="text-xl">Building the future of entertainment</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold mb-6">How It Started</h2>
            <p className="text-gray-600 mb-6">
              What began as a passion for creating engaging content has evolved into a global entertainment phenomenon. Our journey started with a simple goal: to make the internet a more exciting and generous place.
            </p>
            <p className="text-gray-600 mb-6">
              Through creativity, innovation, and an unwavering commitment to our mission, we've grown from a small YouTube channel into a multi-faceted entertainment company that reaches millions of people worldwide.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-indigo-600 mb-2">100M+</div>
              <div className="text-gray-600">Subscribers Worldwide</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-indigo-600 mb-2">$50M+</div>
              <div className="text-gray-600">Given to Charity</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-indigo-600 mb-2">1000+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}