import React from 'react';

const ContactUs = () => {
    return (
        <div className="flex justify-center flex-wrap items-center h-screen bg-gradient-to-b from-[#0f2027] to-[#2c5364]">
            <div className="flex flex-wrap justify-between w-4/5 gap-5 max-w-6xl">
                <div className="flex flex-col items-start justify-start max-w-md">
                    <a href="#" className="inline-flex items-center justify-center px-4 py-2 bg-[#222529] text-white font-bold rounded hover:bg-[#416868] transition duration-300">
                        <img src="headphones_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="" className="mr-2" />
                        Contact
                    </a>
                    <h3 className="text-3xl font-semibold text-white mt-4">Get in Touch with Us</h3>
                    <p className="mt-2 text-gray-400 max-w-[552px]">
                        Ganttify enables you to achieve clarity and significant results on a large scale by linking tasks and workflows to the overarching objectives of the company.
                    </p>
                </div>
                <div className="bg-white rounded-lg p-8 shadow-lg ">
                    <form>
                        <div className="flex flex-wrap gap-5 object-cover text-wrap c">
                            <div className="flex flex-col">
                                <label htmlFor="first-name" className="text-xs text-gray-500 mb-1">First name</label>
                                <input type="text" id="first-name" defaultValue="John" className="border border-gray-300 rounded-lg p-2" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="last-name" className="text-xs text-gray-500 mb-1">Last name</label>
                                <input type="text" id="last-name" defaultValue="Doe" className="border border-gray-300 rounded-lg p-2" />
                            </div>
                        </div>
                        <label htmlFor="email" className="text-xs text-gray-500 mt-4 mb-1">Email</label>
                        <input type="email" id="email" placeholder="Email" defaultValue="johndoe@mail.co" className="border border-gray-300 rounded-lg p-2 w-full" />
                        <label htmlFor="message" className="text-xs text-gray-500 mt-4 mb-1">Problem Descriptions</label>
                        <textarea id="message" placeholder="Message" className="border border-gray-300 rounded-lg p-2 w-full h-24"></textarea>
                        <button type="submit" className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;