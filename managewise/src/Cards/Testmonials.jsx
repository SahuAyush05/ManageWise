import React from "react";
import Card5 from "./Card5"; // Assuming Card5 is in the same directory
import David from '../assets/David.webp';
import Alex from '../assets/Alex.webp';
import Emily from '../assets/emily.webp';
import Sarah from '../assets/sarah.webp';
import './Testimonials.css'
const Testimonials = () => {
  const testimonialsData = [
    {
      author: "David",
      role: "Freelancer",
      quote:
        "I can't imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks.",
      image:David
    },
    {
      author: "Alex",
      role: "IT Manager",
      quote:
        "Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations.",
      image:Alex
    },
    {
        author: "Emily",
        role: "Art Director",
        quote:
          "The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly.",
        image:Emily
      },
      {
        author: "Sarah",
        role: "Project Manager",
        quote:
          "Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity.",
        image:Sarah
      },
  ];

  return (
    <div class="flex flex-row gap-5 testimonials-container ">
      {testimonialsData.map((testimonial, index) => (
        <Card5 key={index} {...testimonial} />
      ))}
    </div>
  );
};

export default Testimonials;
