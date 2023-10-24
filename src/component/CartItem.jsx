import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

const CartItem = () => {
  return (
    <div className="bg-gray-100 min-h-screen h-auto">
      <div className="container py-10">
        <div className="max-w-[500px] w-auto mx-auto flex flex-col gap-8">
          <h2 className="font-semibold mb-3 text-xl">Review Cart Item</h2>
          {/* cart container */}
          <div className="divide-y-4">
            {/* <div className="flex justify-between py-3">
              <div className="flex gap-4">
                <div className="w-[120px]">
                  <img
                    src="https://i.ibb.co/GnQsSsL/smart-home-v2-7.jpg"
                    alt="product image"
                    className="w-auto"
                  />
                </div>
                <div className="flex flex-col">
                  <h5 className="font-semibold text-sm sm:text-lg">Smart Air Fryer</h5>
                  <p className="text-gray-600 text-sm">Quantity: 1</p>
                  <button className="my-auto flex text-gray-700">
                    <TrashIcon className="w-5" /> Remove
                  </button>
                </div>
              </div>
              <div>
                <p className="font-semibold">279$</p>
                <p className="text-gray-600 text-sm">Total: 279$</p>
              </div>
            </div>
            <div className="flex justify-between py-3">
              <div className="flex gap-4">
                <div className="w-[120px]">
                  <img
                    src="https://i.ibb.co/GnQsSsL/smart-home-v2-7.jpg"
                    alt="product image"
                    className="w-auto"
                  />
                </div>
                <div className="flex flex-col">
                  <h5 className="font-semibold text-sm sm:text-lg">Smart Air Fryer</h5>
                  <p className="text-gray-600 text-sm">Quantity: 1</p>
                  <button className="my-auto flex text-gray-700">
                    <TrashIcon className="w-5" /> Remove
                  </button>
                </div>
              </div>
              <div>
                <p className="font-semibold">279$</p>
                <p className="text-gray-600 text-sm">Total: 279$</p>
              </div>
            </div> */}
          </div>
          <div className="text-right">
            <p>
              Total amount: <span className="font-semibold">357$</span>
            </p>
            <p className="text-sm text-gray-500">
              Not including taxes and shipping costs
            </p>
          </div>
          <div className="text-right">
            <button className="btn-outline mr-4">Clear Cart</button>
            <button className="btn-primary">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
