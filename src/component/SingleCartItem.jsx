import React, { useContext } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { removeItem } from "../utils";
import { CartListContext } from "../App";
import toast from "react-hot-toast";

const SingleCartItem = ({ cart }) => {
  const { picture, price, name, id, quantity } = cart;

  const [cartItem, setCartItem] = useContext(CartListContext);
  // remove cart item
  const removeCart = async (id) => {
    const carts = await removeItem(id);
    setCartItem(carts);
    toast.error('product removed 🔥' )
  };

  return (
    <div className="flex justify-between py-3">
      <div className="flex gap-4">
        <div className="w-[120px]">
          <img src={picture} alt="product image" className="w-auto" />
        </div>
        <div className="flex flex-col">
          <h5 className="font-semibold text-sm sm:text-lg">{name}</h5>
          <p className="text-gray-600 text-sm">Quantity: {quantity}</p>
          <button
            className="my-auto flex text-gray-700"
            onClick={() => removeCart(id)}
          >
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
