import {
  FavoriteBorderOutlined,
  Menu,
  PersonOutline,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "motion/react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { isNotAuthenticated } from "../slices/authUserSlice";
import { startLoading, stopLoading } from "../slices/loadingSlice";
import { error, success } from "../slices/toastMsgSlice";

function Navbar() {
  const dispatch = useDispatch();
  const [showDropDown, setDropDown] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.authUser);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  const logoutUser = async () => {
    try {
      dispatch(startLoading());
      const response = await axios.delete("/user/logout");
      if (response.data.success) {
        dispatch(isNotAuthenticated());
        dispatch(success("Logged out successfully"));
      }
    } catch (err) {
      dispatch(error(err.response.data.message || "Internal server error"));
    } finally {
      dispatch(stopLoading());
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <nav className="border-b navbar shadow-md sticky top-0 bg-white">
      <div className="md:container  flex items-center justify-between px-10 p-5">
        <div className="logo text-xl">MegaMart</div>
        {width > 767 && (
          <div className="menu flex gap-5 font-normal text-base">
            <NavLink to="/" className="hover:text-blue-500">
              Home
            </NavLink>
            <NavLink to="/products" className="hover:text-blue-500">
              Shop
            </NavLink>
            <NavLink to="/about" className="hover:text-blue-500">
              About us
            </NavLink>
            <NavLink to="/contact" className="hover:text-blue-500">
              Contact
            </NavLink>
          </div>
        )}
        <div className="buttons flex gap-5">
          <Link to="/wishlist">
            <FavoriteBorderOutlined />
          </Link>
          <Link to="/cart">
            <ShoppingBagOutlined />
          </Link>
          <div className="relative">
            <button onClick={() => setDropDown(!showDropDown)}>
              <PersonOutline />
            </button>
            <div className="dropdown absolute top-8 right-0 shadow-md bg-white rounded-md text-center">
              {showDropDown && (
                <div className="dropdown-menu flex flex-col w-32">
                  {isAuthenticated ? (
                    <>
                      <Link
                        to="/profile"
                        className="hover:bg-blue-400 hover:text-white p-1"
                      >
                        Profile
                      </Link>
                      <button
                        className="hover:bg-blue-400 hover:text-white p-1"
                        onClick={logoutUser}
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="hover:bg-blue-400 hover:text-white p-1"
                      >
                        Login
                      </Link>
                      <Link
                        to="/signup"
                        className="hover:bg-blue-400 hover:text-white p-1"
                      >
                        Signup
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
          {width < 768 && (
            <button onClick={() => setMenuOpen(!isMenuOpen)}>
              <Menu />
            </button>
          )}
        </div>
      </div>
      {isMenuOpen && width < 767 && (
        <motion.div className="menu flex  flex-col items-center pb-3 gap-5 font-normal text-base">
          <NavLink to="/" className="hover:text-blue-500">
            Home
          </NavLink>
          <NavLink to="/product" className="hover:text-blue-500">
            Product
          </NavLink>
          <NavLink to="/about" className="hover:text-blue-500">
            About us
          </NavLink>
          <NavLink to="/contact" className="hover:text-blue-500">
            Contact
          </NavLink>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
