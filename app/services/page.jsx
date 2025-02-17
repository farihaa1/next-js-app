import Link from 'next/link';
import React from 'react';

const ServicePage = () => {
    const services = [
        {
          id: 1,
          name: "Web Development",
          description: "Full-stack web development using MERN stack.",
          price: 500,
          duration: "2 weeks"
        },
        {
          id: 2,
          name: "UI/UX Design",
          description: "Creating user-friendly and visually appealing interfaces.",
          price: 300,
          duration: "1 week"
        },
        {
          id: 3,
          name: "SEO Optimization",
          description: "Improving website rankings on search engines.",
          price: 250,
          duration: "10 days"
        },
        {
          id: 4,
          name: "App Development",
          description: "Building mobile applications for iOS and Android.",
          price: 700,
          duration: "3 weeks"
        }
    ];
  
    
    return (
        <div className="text-center mt-10">
            <p className="font-bold text-xl">Services</p>
            {services.map(d => (
                <div key={d.id} className="border p-4 mt-4 shadow-md rounded-lg">
                    <h1 className="text-lg font-semibold">{d.name}</h1>
                    <button type='button'><Link href={`/services/${d.id}`}>Details</Link></button>
                </div>
            ))}
        </div>
    );
};

export default ServicePage;
