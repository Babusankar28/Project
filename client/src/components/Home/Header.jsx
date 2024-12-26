import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
function Header() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col lg:grid lg:grid-cols-2 py-10 lg:h-[90vh]  overflow-hidden">
      <div className="w-full flex items-center justify-center order-2 lg:order-1">
        <div className="w-4/5">
          <motion.h1
            className="text-4xl font-bold text-gray-600 mb-5 "
            initial={{ x: -300, opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.7 }}
          >
            Music's Next Move
          </motion.h1>
          <motion.div
            initial={{ x: 300, opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.7 }}
          >
            <p className="font-bold text-xl text-gray-400 my-5">
              Goes where no portable speaker has gone before. Acoustically.
              Aesthetically. Effortlessly.
            </p>
            <button
              className="bg-blue-500 text-white px-10 py-3 rounded font-medium hover:bg-blue-700 active:ring-2"
              onClick={() => navigate("/products")}
            >
              Shop Now
            </button>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center items-center h-auto order-1 lg:order-2">
        <img
          src="https://img.freepik.com/free-vector/isometric-laptop-with-shopping-cart-keypad_1262-16544.jpg?t=st=1733119095~exp=1733122695~hmac=015c3805a7b511d270fa8ec4d07c9c0597c42885c9d394e39969e9b27f8f4ec0&w=740"
          alt=""
          className="w-[60%] lg:w-[90%] "
        />
      </div>
    </div>
  );
}

export default Header;
