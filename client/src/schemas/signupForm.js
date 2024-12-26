import * as yup from "yup";

export const signupSchema = yup.object().shape({
  first_name: yup.string().required("Firstname cannot be empty!"),
  last_name: yup.string(),
  email: yup
    .string()
    .email("Please enter the valid email address")
    .required("Email address cannot be empty!"),
  mobile: yup
    .number("Please enter the valid mobile number")
    .required("Mobile number cannot be empty!"),
  password: yup
    .string()
    .required("Password address cannot be empty!")
    .min(6, "Password must be contain 6 characters"),
  confirm_password: yup
    .string()
    .required("Confirm password address cannot be empty!")
    .oneOf(
      [yup.ref("password")],
      "Password and confirm password doesn't match!"
    )
    .min(6, "Confirm password must be contain 6 characters"),
});
