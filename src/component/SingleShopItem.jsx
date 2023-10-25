import React, { useContext } from "react";
import { CartListContext } from "../App";
import { addToCart } from "../utils";
import LoaderFunction from "./LoaderFun";

const SingleShopItem = ({ product }) => {
  const { picture, price, category, name, id } = product;
  const [carItem, setCartItem] = useContext(CartListContext);
// add cart item and get cart item
  const addItem = async (id) => {
    addToCart(id);
    const { cartItems } = await LoaderFunction();
    setCartItem(cartItems);
  };

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
      <button className="btn-primary" onClick={() => addItem(id)}>
        Add To Cart
      </button>
    </div>
  );
};

export default SingleShopItem;
