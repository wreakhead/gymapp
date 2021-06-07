import * as yup from "yup";
const nameRegX = /^[a-zA-Z]{3,}$/;
const mobileRegX = /^[6-9]{1}[0-9]{9}$/;
const passwordRegX = /^[a-zA-Z0-9]{1,}$/;

export const signupSchema = yup.object().shape({
  name: yup.string().matches(nameRegX, "Invalid").required("Required*"),
  mobile: yup.string().matches(mobileRegX, "InValid").required("Required*"),
  password: yup
    .string()
    .required("Required*")
    .matches(passwordRegX, "Only alphabet and number permitted")
    .min(8, "atleast 8 character long")
    .max(12, "max 12 character"),
});
// .string()
// .matches(passwordRegX, "Only alphabet and number permitted")
// .min(8, "atleast 8 character long")
// .max(12, "max 12 character")
