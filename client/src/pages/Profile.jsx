import { Avatar, Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const { user } = useSelector((state) => state.authUser);
  return (
    <div className=" w-2/3 m-auto my-10 p-10 rounded-lg border flex gap-5 flex-row">
      <div className="w-1/3 h-52 border-r-2 flex flex-col border-gray-300 ">
        <div className="flex h-72 gap-3 flex-col items-center justify-center">
          <Avatar className="mx-auto" sx={{ height: "60px", width: "60px" }} />
          <div className="text-center text-gray-600 font-medium text-sm">
            <p className="font-medium text-xl text-black">
              {user.first_name + " " + user.last_name}{" "}
            </p>
            <p>{user.email}</p>
            <p>+91 {user.mobile}</p>
          </div>
        </div>
        <div className="flex justify-center gap-3">
          <Button variant="contained" color="primary" size="small">
            Edit Profile
          </Button>
          <Button variant="contained" color="warning" size="small">
            Change Password
          </Button>
        </div>
      </div>
      <div className="w-2/3 h-52"></div>
    </div>
  );
}

export default Profile;
