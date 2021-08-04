import * as yup from "yup";

export const addFoodSchema = yup.object().shape({
  type: yup.string().required("Require*"),
  name: yup.string().required("Require*"),
  calories: yup.number().required("Require*"),
  carbs: yup.number().required("Require*"),
  fat: yup.number().required("Require*"),
});
