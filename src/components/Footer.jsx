import React from 'react'

const Footer = () => {
  return (
    <>
    
    <div className="bg-black">

            <div className="flex items-center justify-between p-4 bg-black">

                <div className="flex items-center text-white text-lg">

                    <i className="fas fa-cube mr-2"></i>

                    Ganttify

                </div>

                <div className="flex items-center">

                    <i className="fas fa-times text-gray-400 text-lg cursor-pointer hover:text-white ml-4"></i>

                    <i className="fab fa-facebook-f text-gray-400 text-lg cursor-pointer hover:text-white ml-4"></i>

                    <i className="fas fa-camera text-gray-400 text-lg cursor-pointer hover:text-white ml-4"></i>

                </div>

            </div>

            <div className="grid grid-cols-2 md:flex md:justify-between p-10 bg-black">

                <div className="flex flex-col">

                    <h3 className="text-white font-bold text-lg mb-5">Ganttify</h3>

                    <a href="#" className="text-neutral-400 mb-2 hover:underline">Home</a>

                    <a href="#" className="text-neutral-400 mb-2 hover:underline">Product</a>

                    <a href="#" className="text-neutral-400 mb-2 hover:underline">Pricing</a>

                    <a href="#" className="text-neutral-400 mb-2 hover:underline">Customer Success</a>

                    <a href="#" className="text-neutral-400 mb-2 hover:underline">Templates</a>

                    <a href="#" className="text-neutral-400 mb-2 hover:underline">Trust & Security</a>

                </div>

                <div className="flex flex-col">

                    <h3 className="text-white text-lg mb-5">Solutions</h3>

                    <a href="#" className="text-neutral-400 mb-2 hover:underline">Project Management</a>

                    <a href="#" className="text-neutral-400 mb-2 hover:underline">Goal Management</a>

                    <a href="#" className="text-neutral-400 mb-2 hover:underline">Agile Management</a>

                    <a href="#" className="text-neutral-400 mb-2 hover:underline">Task Management</a>

                    <a href="#" className="text-neutral-400 mb-2 hover:underline">Productivity</a>

                    <a href="#" className="text-neutral-400 mb-2 hover:underline">Work Management</a>

                    <a href="#" className="text-neutral-400 mb-2 hover:underline">Project Planning</a>

                    <a href="#" className="text-neutral-400 mb-2 hover:underline">To Do Lists</a>

                </div>

                <div className="flex flex-col">

                    <h3 className="text-white text-lg mb-5">About Us</h3>

                    <a href="#" className="text-neutral-400 mb-2 hover:underline">Company</a>

                    <a href="#" className="text-neutral-400 mb-2 hover:underline">Leadership</a>

                    <a href="#" className="text-neutral-400 mb-2 hover:underline">Customers</a>

                    <a href="#" className="text-neutral-400 mb-2 hover:underline">Careers</a>

                    <a href="#" className="text-neutral-400 mb-2 hover:underline">Changelog</a>

                </div>

                <div className="flex flex-col">

                    <h3 className="text-white text-lg mb-5">Resources</h3>

                    <a href="#" className="text-neutral-400 mb-2 hover:underline">Help Center</a>

                    <a href="#" className="text-neutral-400 mb-2 hover:underline">FAQ</a>

                    <a href="#" className="text-neutral-400 mb-2 hover:underline">Developers & API</a>

                    <a href="#" className="text-neutral-400 mb-2 hover:underline">Community</a>

                    <a href="#" className="text-neutral-400 mb-2 hover:underline">Events</a>

                    <a href="#" className="text-neutral-400 mb-2 hover :underline">Status</a>

                </div>

                <div className="flex flex-col">

                    <h3 className="text-white text-lg mb-5">Helpful Links</h3>

                    <a href="#" className="text-neutral-400 mb-2 hover:underline">Legal center</a>

                    <a href="#" className="text-neutral-400 mb-2 hover:underline">Privacy policy</a>

                    <a href="#" className="text-neutral-400 mb-2 hover:underline">Partnerships</a>

                </div>

            </div>

            <div className="footer-bottom flex md:normal-case justify-between">
                <div className="country-selector flex flex-wrap md:flex border rounded  bg-black gap-0">
                 <img alt="United States flag" className='rounded-full w-8 h-8 mr-1' src="data:image/png;base64,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" width="20"/>
                 <select className=' text-white bg-gray-800 border-none' nameName="flag" id="flag">
                     <option value="volvo">United States</option>
                     <option value="saab">India</option>
                     <option value="mercedes">South Aferica</option>
                     <option value="audi">England</option>
                   </select>
                </div>
                <div className="copyright text-white items-end">
                 © Ganttify 2024. All Rights Reserved
                </div>
               </div>

      </div>    
  </>
  )
};

export default Footer