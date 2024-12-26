import React from "react";
import { Button, TextField } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useSelector } from "react-redux";
function ContactForm() {
  const { isAuthenticated, user } = useSelector((state) => state.authUser);
  return (
    <div className="lg:w-3/5 ">
      <form className=" flex gap-5 flex-col">
        <div className="flex lg:flex-row flex-col gap-5">
          <TextField
            placeholder="Enter your name"
            fullWidth
            label="Username"
            type="text"
            value={
              isAuthenticated ? user.first_name + " " + user.last_name : ""
            }
            disabled={isAuthenticated}
            required
          />
          <TextField
            placeholder="Enter Email Address"
            fullWidth
            label="Email"
            type="email"
            value={isAuthenticated ? user.email : ""}
            disabled={isAuthenticated}
            required
          />
        </div>
        <TextField
          type="text"
          placeholder="Enter your phone number"
          label="Phone number"
          fullWidth
          value={isAuthenticated ? user.mobile : ""}
          disabled={isAuthenticated}
          required
        />
        <TextField
          rows={5}
          placeholder="Your message"
          label="Message"
          fullWidth
          multiline
          required
        />
        <Button variant="contained" size="large" endIcon={<Send />}>
          Send message
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
