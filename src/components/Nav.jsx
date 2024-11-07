import React from 'react';

const Nav = () => {
  return (
    <nav className="bg-white sticky top-0 shadow-sm">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center  gap-5">
            <div className="flex-shrink-0 flex items-center width: Hug (103px)px;
height: Hug (28px)px;
gap: 6px;
opacity: 0px;
">
              <img src="/logo.png" alt="" width={"103px;"} height={'28px;'} />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="#" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">Product</a>
              <a href="#" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">Solutions</a>
              <a href="#" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">Resources</a>
              <a href="#" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">Company</a>
              <a href="#" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">Pricing</a>
            </div>
          </div>
          <div className="flex lg:items-center gap-x-2">
            <button className=" hidden md:flex items-center border rounded-md text-black dark:text-black justify-center px-6 py-2.5 font-semibold">
              Sign Up
            </button>
            <button className="flex items-center justify-center rounded-md bg-black text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;