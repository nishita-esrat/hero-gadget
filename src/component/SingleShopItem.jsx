import React from "react";

const SingleShopItem = ({ product }) => {
  const { picture, price, category, name, id } = product;
  return (
    <div className="p-5 bg-gray-100 shadow-lg flex flex-col gap-4 ">
      <img
        src={picture}
        alt="product image"
        className="shadow-lg rounded-lg h-72 object-cover"
      />
      <div>
        <h3 className="text-2xl my-3 font-bold">{name}</h3>
        <p className="text-gray-700">category : {category}</p>
        <p className="font-bold"> Price : {price}$</p>
      </div>
      <button className="btn-primary">Add To Cart</button>
    </div>
  );
};

export default SingleShopItem;
