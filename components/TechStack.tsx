import React from "react";

const TechStack = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Our Tech Stack
        </h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Frontend</h3>
              <ul className="text-gray-600">
                <li>React</li>
                <li>Vue.js</li>
                <li>Angular</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Backend</h3>
              <ul className="text-gray-600">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Ruby on Rails</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Database</h3>
              <ul className="text-gray-600">
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
