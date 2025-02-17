import React from "react";

const service = ({ params }) => {
  const services = [
    {
      id: 1,
      name: "Web Development",
      description: "Full-stack web development using MERN stack.",
      price: 500,
      duration: "2 weeks",
    },
    {
      id: 2,
      name: "UI/UX Design",
      description: "Creating user-friendly and visually appealing interfaces.",
      price: 300,
      duration: "1 week",
    },
    {
      id: 3,
      name: "SEO Optimization",
      description: "Improving website rankings on search engines.",
      price: 250,
      duration: "10 days",
    },
    {
      id: 4,
      name: "App Development",
      description: "Building mobile applications for iOS and Android.",
      price: 700,
      duration: "3 weeks",
    },
  ];
  const id = Number(params.id);
  const singleService = services.find((d) => d.id == id);

  return (
    <div>
      <h1>{singleService.name}</h1>
    </div>
  );
};

export default service;
