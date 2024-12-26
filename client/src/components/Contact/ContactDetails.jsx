import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import React from "react";

function ContactDetails() {
  return (
    <div className="lg:w-2/5 flex  gap-3 flex-col px-10 my-10 lg:my-0">
      <div className="flex gap-3">
        <b className="w-20">Address : </b>
        <p>
          11-9/31 , Bharathipuram 9th Street,
          <br />
          S.Alangulam,
          <br />
          Madurai-625017.
        </p>
      </div>
      <div className="flex gap-3">
        <b className="w-20">Email : </b>
        <p>sbsankar.80710@gmail.com</p>
      </div>
      <div className="flex gap-3">
        <b className="w-20">Call us : </b>
        <p>+91 8754845428</p>
      </div>
      <div className="flex my-5 gap-5">
        <Facebook sx={{ fontSize: "30px" }} />
        <Instagram sx={{ fontSize: "30px" }} />
        <Twitter sx={{ fontSize: "30px" }} />
        <LinkedIn sx={{ fontSize: "30px" }} />
        <YouTube sx={{ fontSize: "30px" }} />
      </div>
    </div>
  );
}

export default ContactDetails;
