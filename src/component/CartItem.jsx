import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleCartItem from "./SingleCartItem";

const CartItem = () => {
  const { cartItem, products } = useLoaderData();
  const totalAmount = () => {
    let total = 0;
    cartItem.map((item) => {
      let amount = item.quantity * item.price;
      total = total + amount;
    });
    return total;
  };
  const total = totalAmount();
  return (
    <div className="bg-gray-100 min-h-screen h-auto">
      <div className="container py-10">
        <div className="max-w-[500px] w-auto mx-auto flex flex-col gap-8">
          <h2 className="font-semibold mb-3 text-xl">
            {cartItem.length ? "Review Cart Item" : "Cart is EMPTY!"}
          </h2>
          {/* cart container */}
          <div className="divide-y-4">
            {cartItem.length &&
              cartItem.map((item) => (
                <SingleCartItem key={item.id} cart={item} />
              ))}
          </div>
          <div className="text-right">
            <p>
              Total amount:{" "}
              <span className="font-semibold">
                {cartItem.length ? `${total}` : 0}$
              </span>
            </p>
            <p className="text-sm text-gray-500">
              Not including taxes and shipping costs
            </p>
          </div>
          <div className="text-right">
            {cartItem.length ? (
              <button className="btn-outline mr-4">Clear Cart</button>
            ) : (
              <button className="btn-outline mr-4">Back To Shop</button>
            )}
            <button className="btn-primary">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
