import * as yup from "yup";

export const addWorkoutSchema = yup.object().shape({
  name: yup.string().required("Require*"),
  sets: yup.number(),
  reps: yup.number(),
  weight: yup.number(),
  AMQRP: yup.number(),
  AMQRPwt: yup.number(),
  remark: yup.string(),
});
