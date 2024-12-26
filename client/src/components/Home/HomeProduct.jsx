import React from "react";
import {
  Battery90Outlined,
  Settings,
  TuneOutlined,
  WifiOff,
  WifiTethering,
  Work,
} from "@mui/icons-material";
import { motion } from "motion/react";
import speakerImage from "../../assets/Homepage/speaker.png";
function HomeProduct() {
  return (
    <div className="bg-blue-200 p-20 text-center">
      <h1 className="text-4xl font-bold mb-5">
        An Evolution of Sound and Power
      </h1>
      <p className="lg:w-1/2 md:w1/3 mx-auto font-semibold text-gray-600 text-lg my-5">
        "Enjoy crystal-clear sound with our portable Bluetooth speaker, designed
        for music on the go. With long battery life and easy connectivity, it’s
        perfect for any occasion!"
      </p>
      <div className="lg:grid lg:grid-cols-3 md:grid-cols-2 flex flex-wrap mt-10  gap-5 md:gap-5  container">
        <div className="flex gap-3 order-2 lg:order-1 w-full md:w-[48%] lg:w-auto flex-col">
          <div className="flex lg:h-24 md:h-32 w-full gap-5 items-center flex-row-reverse md:flex-row md:text-right text-left">
            <div className="w-auto">
              <h2 className="font-medium text-2xl ">
                Simple, Wireless Charging
              </h2>
              <p className="font-semibold text-gray-700 text-sm md:ps-5 mt-2 ">
                Enjoy hassle-free power and seamless music playback anywhere!
              </p>
            </div>
            <div className="min-w-20 h-20 bg-white flex items-center justify-center rounded-lg shadow">
              <motion.p
                animate={{ x: 0 }}
                whileHover={{
                  x: [-6, 0, 6, 0, -6, 0],
                }}
                transition={{
                  type: "spring",
                  bounce: 2,
                  duration: 0.6,
                }}
              >
                <WifiOff sx={{ fontSize: "35px" }} />
              </motion.p>
            </div>
          </div>
          <div className="flex lg:h-24 md:h-32 w-full gap-5 flex-row-reverse md:flex-row items-center md:text-right text-left">
            <div className="w-auto">
              <h2 className="font-medium text-2xl ">Work To Workout</h2>
              <p className="font-semibold text-gray-700 text-sm md:ps-5 mt-2 ">
                Enjoy hassle-free power and seamless music playback anywhere!
              </p>
            </div>
            <div className="min-w-20 h-20 bg-white flex items-center justify-center rounded-lg shadow">
              <motion.p
                animate={{ x: 0 }}
                whileHover={{
                  x: [-6, 0, 6, 0, -6, 0],
                }}
                transition={{
                  type: "spring",
                  bounce: 2,
                  duration: 0.6,
                }}
              >
                <Work sx={{ fontSize: "35px" }} />
              </motion.p>
            </div>
          </div>
          <div className="flex lg:h-24 md:h-32 w-full gap-5 flex-row-reverse md:flex-row items-center md:text-right text-left">
            <div className="w-auto">
              <h2 className="font-medium text-2xl">
                Design For Sustainability
              </h2>
              <p className="font-semibold text-gray-700 text-sm md:ps-5 mt-2 ">
                Enjoy hassle-free power and seamless music playback anywhere!
              </p>
            </div>
            <div className="min-w-20 h-20 bg-white flex items-center justify-center rounded-lg shadow">
              <motion.p
                animate={{ x: 0 }}
                whileHover={{
                  x: [-6, 0, 6, 0, -6, 0],
                }}
                transition={{
                  type: "spring",
                  bounce: 2,
                  duration: 0.6,
                }}
              >
                <WifiTethering sx={{ fontSize: "35px" }} />
              </motion.p>
            </div>
          </div>
        </div>
        <div className="flex items-center order-1 lg:order-1 w-full justify-center">
          <img
            src={speakerImage}
            alt="bluetooth speaker"
            className="object-cover w-2/3"
          />
        </div>
        <div className="flex gap-3 w-full order-3 lg:order-1 md:w-[48%] lg:w-auto flex-col">
          <div className="flex lg:h-24 md:h-32 w-full gap-5 items-center text-left">
            <div className="min-w-20 h-20 bg-white flex items-center justify-center  rounded-lg shadow">
              <motion.p
                animate={{ x: 0 }}
                whileHover={{
                  x: [-6, 0, 6, 0, -6, 0],
                }}
                transition={{
                  type: "spring",
                  bounce: 2,
                  duration: 0.6,
                }}
              >
                <Battery90Outlined sx={{ fontSize: "35px" }} />
              </motion.p>
            </div>
            <div className="w-auto">
              <h2 className="font-medium text-2xl ">All-Day Battery Life</h2>
              <p className="font-semibold text-gray-700 text-sm mt-2 ">
                Enjoy hassle-free power and seamless music playback anywhere!
              </p>
            </div>
          </div>
          <div className="flex lg:h-24 md:h-32 w-full gap-5 items-center text-left">
            <div className="min-w-20 h-20 bg-white flex items-center justify-center rounded-lg shadow">
              <motion.p
                animate={{ x: 0 }}
                whileHover={{
                  x: [-6, 0, 6, 0, -6, 0],
                }}
                transition={{
                  type: "spring",
                  bounce: 2,
                  duration: 0.6,
                }}
              >
                <Settings sx={{ fontSize: "35px" }} />
              </motion.p>
            </div>
            <div className="w-auto">
              <h2 className="font-medium text-2xl">Control By App</h2>
              <p className="font-semibold text-gray-700 text-sm mt-2 ">
                Enjoy hassle-free power and seamless music playback anywhere!
              </p>
            </div>
          </div>
          <div className="flex lg:h-24 md:h-32 w-full gap-5 items-center text-left">
            <div className="min-w-20 h-20 bg-white flex items-center justify-center rounded-lg shadow">
              <motion.p
                animate={{ x: 0 }}
                whileHover={{
                  x: [-6, 0, 6, 0, -6, 0],
                }}
                transition={{
                  type: "spring",
                  bounce: 2,
                  duration: 0.6,
                }}
              >
                <TuneOutlined sx={{ fontSize: "35px" }} />
              </motion.p>
            </div>
            <div className="w-auto">
              <h2 className="font-medium text-2xl ">Customize</h2>
              <p className="font-semibold text-gray-700 text-sm mt-2 ">
                Enjoy hassle-free power and seamless music playback anywhere!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProduct;
