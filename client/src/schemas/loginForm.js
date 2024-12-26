import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter the valid email address")
    .required("Email address cannot be empty!"),
  password: yup
    .string()
    .required("Password address cannot be empty!")
    .min(6, "Password must be contain 6 characters"),
});
