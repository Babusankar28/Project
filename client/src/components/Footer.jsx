import {
  CopyrightOutlined,
  FacebookRounded,
  Instagram,
  LinkedIn,
  Pinterest,
  Twitter,
  YouTube,
} from "@mui/icons-material";

import masterCard from "../assets/payment_images/1156750_finance_mastercard_payment_icon.png";
import visaCard from "../assets/payment_images/1156753_finance_payment_visa_icon.png";
import rupayCard from "../assets/payment_images/701549_bank_card_payment_rupay_icon.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer bg-black p-4  pb-0 text-white ">
      <div className="container grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
        <div className="p-3">
          <h3 className="mb-3 font-medium text-xl">Payment Accepts:</h3>
          <div className="flex flex-wrap gap-5 px-3">
            <div className="bg-white px-3">
              <img src={masterCard} alt="card" width={"30px"} />
            </div>
            <div className="bg-white px-3">
              <img src={visaCard} alt="card" width={"30px"} />
            </div>
            <div className="bg-white px-3">
              <img src={rupayCard} alt="card" width={"30px"} />
            </div>
          </div>
          <h3 className="mb-3 my-5 font-medium text-xl">Connect with us :</h3>
          <div className="flex flex-wrap gap-5 px-3">
            <FacebookRounded
              style={{ fontSize: "25px" }}
              className="cursor-pointer"
            />
            <Pinterest
              style={{ fontSize: "25px" }}
              className="cursor-pointer"
            />
            <Instagram
              style={{ fontSize: "25px" }}
              className="cursor-pointer"
            />
            <Twitter style={{ fontSize: "25px" }} className="cursor-pointer" />
            <LinkedIn style={{ fontSize: "25px" }} className="cursor-pointer" />
            <YouTube style={{ fontSize: "25px" }} className="cursor-pointer" />
          </div>
        </div>
        <div className="p-3">
          <h3 className="text-xl font-bold mb-3">Usefull links : </h3>
          <div className="flex flex-col gap-1">
            <Link to="/about" className="hover:text-blue-400 hover:underline">
              About us
            </Link>
            <Link to="/terms" className="hover:text-blue-400 hover:underline">
              Terms and Conditions
            </Link>
            <Link to="/privacy" className="hover:text-blue-400 hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="p-3">
          <h3 className="mb-3 font-medium text-xl">Contact Us:</h3>
          <p>
            <span>Phone: +91 1234567890</span>
            <br />
            <span>Email: info@megamart.com</span>
          </p>
          <p>
            <span>Address: 123 Main St, Madurai, Tamilnadu, India</span>
          </p>
        </div>
      </div>
      <div className="text-center border-t border-gray-400 text-gray-300">
        <p className="py-3">
          <CopyrightOutlined /> 2023 MegaMart. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
