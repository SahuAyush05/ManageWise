// Container3.js
import React from "react";
import Card3 from "./Card3";
import image1 from '../assets/easy.webp';
import image2 from '../assets/image4.webp';
import image3 from '../assets/analytic.webp';
import './Card3.css'
const cardData = [
  {
    title: "Easy Communication",
    description: "Collaborate seamlessly with your team in real-time",
    image: image1,
  },
  {
    title: "Flexible Scheduling",
    description: "Stay productive with our flexible scheduling system",
    image: image2,
  },
  {
    title: "Analytics",
    description: "Gain valuable insights with our advanced analytics feature",
    image: image3,
  },
  // Add more data as needed
];

const Container3 = () => {
  return (
    <div className="card">
      {cardData.map((data, index) => (
        <Card3 key={index} {...data} />
      ))}
    </div>
  );
};

export default Container3;
