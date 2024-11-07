import React from 'react'

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className=" mb-12">
        <div className="inline-flex  px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm mb-4">
          <i className="fas fa-star mr-2"></i> Features
        </div>
        <h1 className="text-4xl font-bold mb-4">Everything Your Team Looking For</h1>
        <p className="text-lg text-gray-500">Ganttify’s exceptional flexibility can handle any type of work. And we never stop innovating.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <img src="/card1.png" alt="Project Management illustration" className="w-full mb-4 rounded-lg" />
          <h2 className="text-xl font-semibold mb-2">Project Management</h2>
          <p className="text-gray-500">Manage your projects from start to finish. With all of your projects in Ganttify, you’ll always know who’s doing what, by when.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <img src="/card2.png" alt="Workflows and Automations illustration" className="w-full mb-4 rounded-lg" />
          <h2 className="text-xl font-semibold mb-2">Workflows and Automations</h2>
          <p className="text-gray-500">Create more efficient processes so you can seamlessly manage projects across departments and get more done in less time.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <img src="/card3.png" alt="Goals and Reporting illustration" className="w-full mb-4 rounded-lg" />
          <h2 className="text-xl font-semibold mb-2">Goals and Reporting</h2>
          <p className="text-gray-500">See how each project and portfolio ladders up to company objectives and keep everyone focused on the work that matters.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <img src="/card4.png" alt="Resource Management illustration" className="w-full mb-4 rounded-lg" />
          <h2 className="text-xl font-semibold mb-2">Resource Management</h2>
          <p className="text-gray-500">Get the visibility you need to plan accurate timelines, adjust workloads, and stay on track to achieve your objectives.</p>
        </div>
      </div>
    </div>
  );
};



export default Features