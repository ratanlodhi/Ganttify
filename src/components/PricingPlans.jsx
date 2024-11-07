import React from 'react';

const PricingPlans = () => {
    return (
        <div className="flex flex-col  justify-center min-h-screen bg-gray-900 text-white">
            <div className="">
                <div className='w-fit'>
                <div className=" flex gap-1 items-center bg-gray-700 px-3 py-1 justify-start rounded text-sm mb-2">
                    <img className='w-4 h-4' src="/credit-card.png" alt="" />
                    Pricing</div>
                    </div>

                    <div className='flex flex-wrap gap-2 md:p-0 p-4 justify-between'>
                <h2 className="text-4xl justify-start font-bold">Simple and Flexible Pricing</h2>
                <div className="flex justify-center mb-10">
                <button className="bg-white text-black py-2 px-4 rounded mr-2 active">Monthly</button>
                <button className="bg-gray-700 text-white py-2 px-4 rounded">Annually</button>
            </div>
            </div>
            </div>
          
            <div className="grid md:flex md:justify-center gap-5">
                <div className="bg-gray-800 p-5 rounded-lg w-72 text-left">
                    <h2 className="text-2xl font-semibold">Personal</h2>
                    <div className="text-3xl font-bold">$29 <span className="text-lg font-normal">per month</span></div>
                    <p className="mt-2 mb-5">For individuals and small teams looking to manage their tasks</p>
                    <ul className="list-none p-0 mb-5">
                        <li className="flex items-center mb-2"><i className="fas fa-check text-green-500 mr-2"></i> Unlimited contacts</li>
                        <li className="flex items-center mb-2"><i className="fas fa-check text-green-500 mr-2"></i> Bulk emailing</li>
                        <li className="flex items-center mb-2"><i className="fas fa-check text-green-500 mr-2"></i> AI Integration</li>
                        <li className="flex items-center mb-2"><i className="fas fa-check text-green-500 mr-2"></i> View & share up to 3 years</li>
                        <li className="flex items-center mb-2"><i className="fas fa-check text-green-500 mr-2"></i> Collaboration & permissions</li>
                    </ul>
                    <button className="bg-gray-700 text-white py-2 px-4 rounded w-full">Get Started</button>
                </div>
                <div className="bg-white text-black p-5 rounded-lg w-72 text-left">
                    <h2 className="text-2xl font-semibold">Pro</h2>
                    <div className="text-3xl font-bold">$39 <span className="text-lg font-normal">per month</span></div>
                    <p className="mt-2 mb-5">For growing teams that need to track their projects' progress and hit deadlines</p>
                    <ul className="list-none p-0 mb-5">
                        <li className="flex items-center mb-2"><i className="fas fa-check text-green-500 mr-2"></i> Email sequences</li>
                        <li className="flex items-center mb-2"><i className="fas fa-check text-green-500 mr-2"></i> Send emails from multiple domains</li>
                        <li className="flex items-center mb-2"><i className="fas fa-check text-green-500 mr-2"></i> Connect multiple email accounts</li>
                        <li className="flex items-center mb-2"><i className="fas fa-check text-green-500 mr-2"></i> Fully adjustable sharing permissions</li>
                        <li className="flex items-center mb-2"><i className="fas fa-check text-green-500 mr-2"></i> Migration services</li>
                    </ul>
                    <button className="bg-black text-white py-2 px-4 rounded w-full">Get Started</button>
                </div>
                <div className="bg-gray-800 p-5 rounded-lg w-72 text-left">
                    <h2 className="text-2xl font-semibold">Custom Plan</h2>
                    <div className="text-lg font-bold">Custom Plan</div>
                    <p className="mt-2 mb-5">For companies that need to manage a portfolio of work and goals across departments</p>
                    <ul className="list-none p-0 mb-5">
                        <li className="flex items-center mb-2"><i className="fas fa-check text-green-500 mr- 2"></i> White glove onboarding</li>
                        <li className="flex items-center mb-2"><i className="fas fa-check text-green-500 mr-2"></i> Custom billing</li>
                        <li className="flex items-center mb-2"><i className="fas fa-check text-green-500 mr-2"></i> Dedicated slack channel</li>
                        <li className="flex items-center mb-2"><i className="fas fa-check text-green-500 mr-2"></i> Dedicated point of contact</li>
                        <li className="flex items-center mb-2"><i className="fas fa-check text-green-500 mr-2"></i> Unlimited reporting</li>
                    </ul>
                    <button className="bg-gray-700 text-white py-2 px-4 rounded w-full">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default PricingPlans;