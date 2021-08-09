import * as yup from "yup";

export const addFoodSchema = yup.object().shape({
  category: yup.string().required("Require*"),
  name: yup.string().required("Require*"),
  calories: yup.number().required("Require*"),
  carbs: yup.number().required("Require*"),
  fat: yup.number().required("Require*"),
  fiber: yup.number().required("Require*"),
  protein: yup.number().required("Require*"),
});
export const addMealSchema = yup.object().shape({
  type: yup.string().required("Require*"),
  name: yup.string().required("Require*"),
  amount: yup.number().required("Require*"),
});
