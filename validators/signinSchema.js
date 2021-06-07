import * as yup from "yup";
const mobileRegX = /^[6-9]{1}[0-9]{9}$/;
const passwordRegX = /^[a-zA-Z0-9]{8,12}$/;

export const signinSchema = yup.object().shape({
  mobile: yup.string().matches(mobileRegX, "Not Valid").required("Required*"),
  password: yup.string().required("Required*"),
});
// .string()
// .matches(passwordRegX, "Only alphabet and number permitted")
// .min(8, "atleast 8 character long")
// .max(12, "max 12 character")