import React from "react";
import './Products.css';
import FurnitureItem from "./furnitureitems";


const Products = () => {
  const furnitureItems = [
    {
      id: 1,
      name: "BROWN CHAIR DESIGN",
      price: 100,
      image: "/images/f1.png", // Replace with actual image path
    },
    {
      id: 2,
      name: "DOUBLE BED DESIGN",
      price: 200,
      image: "/images/f2.png",
    },
    {
      id: 3,
      name: "HOUSE CHAIR DESIGN",
      price: 200,
      image: "/images/f3.png",
    },
    {
      id: 4,
      name: "BROWN TABLE DESIGN",
      price: 100,
      image: "/images/f4.png",
    },
    {
      id: 5,
      name: "BLUE CHAIR DESIGN",
      price: 200,
      image: "/images/f5.png",
    },
    {
      id: 6,
      name: "BROWN TABLE DESIGN",
      price: 200,
      image: "/images/f6.png",
    },
  ];

  return (
    <div className="furniture-container">
      <h2>OUR FURNITURE</h2>
      <p>which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't an</p>
      <div className="grid-container">
        {furnitureItems.map((item) => (
          <FurnitureItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
