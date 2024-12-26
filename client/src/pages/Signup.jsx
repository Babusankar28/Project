import React from "react";
import { useFormik } from "formik";
import { signupSchema } from "../schemas/signupForm";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { error, success } from "../slices/toastMsgSlice";
import { startLoading, stopLoading } from "../slices/loadingSlice";
import { authenticated } from "../slices/authUserSlice";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function createUser(values, actions) {
    delete values.confirm_password;
    try {
      dispatch(startLoading());
      const response = await axios
        .post("/user/create-user", values)
        .then((res) => res.data);
      if (response.success) {
        dispatch(authenticated(response.user));
        dispatch(success("Account Created successfully"));
      }
    } catch (err) {
      dispatch(error(err.response.data.message || "Internal server error"));
    } finally {
      dispatch(stopLoading());
      actions.resetForm();
    }
  }
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      mobile: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: signupSchema,
    onSubmit: createUser,
  });
  return (
    <div className="lg:w-1/2 w-2/3 m-auto my-10 flex gap-10 flex-col p-10 rounded-lg border">
      <h3 className="uppercase text-2xl font-bold text-center">
        Create Account
        <hr className="mt-3" />
      </h3>
      <form
        className="flex gap-5 flex-col md:px-10 px-5"
        onSubmit={handleSubmit}
      >
        <div className=" flex gap-5 flex-col md:flex-row ">
          <div className="w-full">
            <input
              type="text"
              placeholder="First Name *"
              value={values.first_name}
              name="first_name"
              onChange={handleChange}
              className="p-3 rounded focus:ring-2 outline-none border w-full"
            />
            {errors.first_name && touched.first_name && (
              <p className="ml-2 mt-1 text-sm text-red-500 font-medium">
                {errors.first_name}
              </p>
            )}
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Last Name"
              name="last_name"
              value={values.last_name}
              onChange={handleChange}
              className="p-3 rounded focus:ring-2 outline-none border w-full"
            />
            {errors.last_name && touched.last_name && (
              <p className="ml-2 mt-1 text-sm text-red-500 font-medium">
                {errors.last_name}
              </p>
            )}
          </div>
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Address *"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="p-3 rounded focus:ring-2 outline-none border w-full"
          />
          {errors.email && touched.email && (
            <p className="ml-2 mt-1 text-sm text-red-500 font-medium">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="Mobile Number *"
            name="mobile"
            value={values.mobile}
            onChange={handleChange}
            className="p-3 rounded focus:ring-2 outline-none border w-full"
          />
          {errors.mobile && touched.mobile && (
            <p className="ml-2 mt-1 text-sm text-red-500 font-medium">
              {errors.mobile}
            </p>
          )}
        </div>
        <div>
          <input
            type="password"
            placeholder="Create Password *"
            name="password"
            value={values.password}
            onChange={handleChange}
            className="p-3 rounded focus:ring-2 outline-none border w-full"
          />
          {errors.password && touched.password && (
            <p className="ml-2 mt-1 text-sm text-red-500 font-medium">
              {errors.password}
            </p>
          )}
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password *"
            name="confirm_password"
            value={values.confirm_password}
            onChange={handleChange}
            className="p-3 rounded focus:ring-2 outline-none border w-full"
          />
          {errors.confirm_password && touched.confirm_password && (
            <p className="ml-2 mt-1 text-sm text-red-500 font-medium">
              {errors.confirm_password}
            </p>
          )}
        </div>
        <button
          className="bg-blue-500 text-white px-10 py-3 rounded font-medium hover:bg-blue-700 active:ring-2"
          type="submit"
        >
          Create Account
        </button>
        <p className="text-center font-medium">
          Already have an account ?{" "}
          <button
            className="text-blue-400 hover:underline"
            onClick={() => navigate("/login")}
          >
            Login.
          </button>
        </p>
      </form>
    </div>
  );
}

export default Signup;
