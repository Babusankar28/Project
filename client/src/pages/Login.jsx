import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { error, success } from "../slices/toastMsgSlice";
import { startLoading, stopLoading } from "../slices/loadingSlice";
import { authenticated } from "../slices/authUserSlice";
import { loginSchema } from "../schemas/loginForm";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function loginUser(values, actions) {
    try {
      dispatch(startLoading());
      const response = await axios
        .post("/user/login-user", values)
        .then((res) => res.data);
      if (response.success) {
        dispatch(authenticated(response.user));
        dispatch(success("Login successfully"));
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
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: loginUser,
  });
  return (
    <div className="lg:w-1/3 md:w-1/2 w-[80%] m-auto my-10 flex gap-10 flex-col p-10 rounded-lg border">
      <h3 className="uppercase text-2xl font-bold text-center">
        Login Account
        <hr className="mt-3" />
      </h3>
      <form
        className="flex gap-5 flex-col md:px-10 px-5"
        onSubmit={handleSubmit}
      >
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
        <button
          className="bg-blue-500 text-white px-10 py-3 rounded font-medium hover:bg-blue-700 active:ring-2"
          type="submit"
        >
          Login
        </button>
        <p className="text-center font-medium">
          If you don't have an account ?{" "}
          <button
            className="text-blue-400 hover:underline"
            onClick={() => navigate("/signup")}
          >
            Create account.
          </button>
        </p>
      </form>
    </div>
  );
}

export default Login;
