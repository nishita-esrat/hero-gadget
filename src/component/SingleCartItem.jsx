import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

const SingleCartItem = ({cart}) => {
    const { picture, price, category, name, id,quantity } = cart;
  return (
    <div className="flex justify-between py-3">
      <div className="flex gap-4">
        <div className="w-[120px]">
          <img
            src={picture}
            alt="product image"
            className="w-auto"
          />
        </div>
        <div className="flex flex-col">
          <h5 className="font-semibold text-sm sm:text-lg">{name}</h5>
          <p className="text-gray-600 text-sm">Quantity: {quantity}</p>
          <button className="my-auto flex text-gray-700">
            <TrashIcon className="w-5" /> Remove
          </button>
        </div>
      </div>
      <div>
        <p className="font-semibold">{price}$</p>
        <p className="text-gray-600 text-sm">Total: {quantity * price}$</p>
      </div>
    </div>
  );
};

export default SingleCartItem;