import React from 'react';

const CustomerTestimonials = () => {
    return (
        <div className="flex flex-col items-center p-10 bg-white text-gray-800">
            <div className="mb-5">
                <a href="#" className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
                    <i className="fas fa-user mr-2"></i>
                    Customers
                </a>
            </div>
            <h1 className="text-3xl font-bold mb-2">See What Our Customers Are Saying</h1>
            <p className="text-gray-500 mb-10">Here's what some of our customers say about our platform.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonialsData.map((testimonial, index) => (
                    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-5" key={index}>
                        <div className="flex items-center mb-2">
                            <div className="flex text-yellow-500">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <i className="fas fa-star" key={i}></i>
                                ))}
                            </div>
                            <span className="ml-2 font-semibold">{testimonial.rating}</span>
                        </div>
                        <p className="text-gray-700 mb-4">{testimonial.comment}</p>
                        <div className="flex items-center">
                            <img alt={`Portrait of ${testimonial.name}`} src={testimonial.image} className="rounded-full w-10 h-10 mr-3" />
                            <div>
                                <div className="font-semibold">{testimonial.name}</div>
                                <div className="text-sm text-gray-500">{testimonial.title}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const testimonialsData = [
    {
        rating: 4.8,
        comment: "“Gantify has revolutionized the way we manage our projects. Connecting tasks and workflows to our overall company goals has never been easier.”",
        name: "Charolette Hanlin",
        title: "Co-Founder, Heroes Digital",
        image: "https://storage.googleapis.com/a1aa/image/zP0fKWiPGIVVcKidfYVT4fvviXjlqrgM6ODHdxp9k0WLa7cnA.jpg"
    },
    {
        rating: 4.8,
        comment: "“Using Gantify has streamlined our project management process. It’s incredibly effective in aligning our daily tasks with the company’s strategic goals.”",
        name: "Eleanor Pena",
        title: "Co-Founder, Heroes Digital",
        image: "https://storage.googleapis.com/a1aa/image/oWezzqFFrKyhT6XTypxOSpeh7e27tJULNJtQXUqfAQ9j025OB.jpg"
    },
    {
        rating: 4.8,
        comment: "“Gantify has provided us with a unified view of our projects. It connects our workflows directly to our business goals, making it easier to track progress.”",
        name: "Guy Hawkins",
        title: "Co-Founder, Heroes Digital",
        image: "https://storage.googleapis.com/a1aa/image/i04WRur01vZsGNtjgNLVfueyTjLGPk1HJ5DDbYIE7NNGtduTA.jpg"
    },
    {
        rating: 4.8,
        comment: "“Gantify’s ability to connect tasks with our company’s goals has given us a new level of clarity and efficiency in our project management efforts.”",
        name: "Kristin Watson",
        title: "Co-Founder, Heroes Digital",
        image: "https://storage.googleapis.com/a1aa/image/rY254u4DtaZFL9GbUqcdLTfPTUXzm2EBz20nPnRrXYxh2O3JA.jpg"
    },
    {
        rating: 4.8,
        comment: "“Using Gantify, we’ve been able to ensure that all our project activities are aligned with our overarching business objectives, leading to better coordination and success.”",
        name: "Jane Cooper",
        title: "Co-Founder, Heroes Digital",
        image: "https://storage.googleapis.com/a1aa/image/J2zIGn45uezlX6jRxmVI9 O2jx0riTe439LUOkQVVn8oKtduTA.jpg"
    },
    {
        rating: 4.8,
        comment: "“Gantify has transformed our approach to project management. It ensures that every task, no matter how small, is aligned with our company’s mission and goals.”",
        name: "Leslie Alexander",
        title: "Co-Founder, Heroes Digital",
        image: "https://storage.googleapis.com/a1aa/image/5GZeQfMxg9rn50MfKhEgoUrfa6MChO7XdsLWuBonKQxd025OB.jpg"
    }
];

export default CustomerTestimonials;