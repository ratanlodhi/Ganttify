import React from 'react'

const Hero = () => {
  return (
    <>



      <div className="container mx-auto px-6 py-12 bg-[url('/bg.png')]">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 width: Fixed (588px)px; height: Hug (532px)px;
gap: 72px;

opacity: 0px;">
            <div className="flex  items-center mb-1 p-[8px] pl-[8px] pr-[12px] gap-[6px] rounded-[10px] rounded-l-none  border-t-0 border-r-0 border-b-0 border-l-0 ">
              <img className='w-3 h-3' src="/crosshair.png" alt="" />
              <span className=" text-sm text-gray-400">
                Goals &amp; Reporting
              </span>
            </div>
            <h1 className="text-5xl text-white font-bold mb-4">
              Goals and Reporting In One Place
            </h1>
            <p className="text-gray-400 mb-6">
              Connect every team's work to company objectives, then track progress
              with real-time data
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-gray-900 font-semibold py-2 px-4 rounded-lg">
                Get Started
              </button>
              <button className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg">
                How it Works
              </button>
            </div>
            <div className="mt-8">
              <p className="text-gray-400 mb-4">Trusted by 2 million+ teams</p>
              <div className="flex flex-wrap space-x-6 items-center">
                <img
                  alt="Mailchimp logo"
                  className="h-10"
                  height={40}
                  src="/Company logo(6).png"
                  width={100}
                />
                <img
                  alt="Mailchimp logo"
                  className="h-10"
                  height={40}
                  src="/Company logo(7).png"
                  width={100}
                />
                <img
                  alt="Mailchimp logo"
                  className="h-10"
                  height={40}
                  src="/Company logo(8).png"
                  width={100}
                />
                <img
                  alt="Mailchimp logo"
                  className="h-10"
                  height={40}
                  src="/Company logo(9).png"
                  width={100}
                />
                
                
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex flex-col space-y-6">

            <img src="public/illustration.png" alt="" width="588px;"
              height="532px;"
            />
          </div>
        </div>
      </div>


    </>

  )
}

export default Hero