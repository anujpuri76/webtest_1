import React from "react";


const FurnitureItem = ({ item }) => {
  return (
    <div className="card">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="discription">
        <div>
      <h3>{item.name}</h3>
      <p className="price">${item.price}.00</p>
      </div>
      <div className="btn">
      <button className="buy-now">BUY NOW</button>
      </div>
      </div>
    </div>
  );
};
export default FurnitureItem;