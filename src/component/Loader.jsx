import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-12 h-12 sm:w-24 sm:h-24 rounded-full border-solid border-s-4 border-cyan-700 animate-spin"></div>
    </div>
  );
};

export default Loader;
