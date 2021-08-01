import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Field, useFormik } from "formik";
import InputAdornment from "@material-ui/core/InputAdornment";
import { MenuItem } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { addWorkoutSchema } from "@validators/addWorkoutSchema";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import { IconButton } from "@material-ui/core";
import { addWorkoutData, getWorkoutData } from "@auth/auth";
import { useRouter } from "next/router";

import useSWR from "swr";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "110px",
  },
}));

export default function AddWorkout() {
  const classes = useStyles();
  const router = useRouter();
  // const { data } = useSWR("workoutsuggestion", getWorkoutData, {
  //   refreshInterval: 1000,
  // });
  // console.log(data);
  const workoutType = ["Push", "Pull", "Leg"];

  const formSubmitted = async (event) => {
    const addData = await addWorkoutData(event);
    if (addData == 403) {
      router.push("/signin");
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      type: "",
      sets: 0,
      reps: 0,
      weight: 0,
      AMQRP: 0,
      AMQRPwt: 0,
      remark: "",
    },
    validationSchema: addWorkoutSchema,
    onSubmit: (val) => {
      formSubmitted(val);
    },
  });

  return (
    <div className={classes.root}>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            className={clsx(classes.margin, classes.textField)}
            label="workout"
            id="name"
            type="text"
            autoComplete="on"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            className={clsx(classes.margin, classes.textField)}
            label="type"
            id="type"
            name="type"
            select
            
            value={formik.values.type}
            onChange={formik.handleChange}
            error={formik.touched.type && Boolean(formik.errors.type)}
            helperText={formik.touched.type && formik.errors.type}
          >
            
            <MenuItem key="push" value="push">
              Push
            </MenuItem>
            <MenuItem key="pull" value="pull">
              Pull
            </MenuItem>
            <MenuItem key="leg" value="leg">
              Leg
            </MenuItem>
          </TextField>

          <TextField
            label="sets"
            id="sets"
            type="number"
            className={clsx(classes.margin, classes.textField)}
            value={formik.values.sets}
            onChange={formik.handleChange}
            error={formik.touched.sets && Boolean(formik.errors.sets)}
            helperText={formik.touched.sets && formik.errors.sets}
          />
          <TextField
            label="reps"
            id="reps"
            type="number"
            className={clsx(classes.margin, classes.textField)}
            value={formik.values.reps}
            onChange={formik.handleChange}
            error={formik.touched.reps && Boolean(formik.errors.reps)}
            helperText={formik.touched.reps && formik.errors.reps}
          />
          <TextField
            label="weight"
            id="weight"
            type="number"
            className={clsx(classes.margin, classes.textField)}
            value={formik.values.weight}
            onChange={formik.handleChange}
            error={formik.touched.weight && Boolean(formik.errors.weight)}
            helperText={formik.touched.weight && formik.errors.weight}
            InputProps={{
              endAdornment: <InputAdornment position="end"> Kg</InputAdornment>,
            }}
          />
          <TextField
            label="AMQRP"
            id="AMQRP"
            type="number"
            className={clsx(classes.margin, classes.textField)}
            value={formik.values.AMQRP}
            onChange={formik.handleChange}
            error={formik.touched.AMQRP && Boolean(formik.errors.AMQRP)}
            helperText={formik.touched.AMQRP && formik.errors.AMQRP}
          />
          <TextField
            label="AMQRP wt"
            id="AMQRPwt"
            type="number"
            className={clsx(classes.margin, classes.textField)}
            value={formik.values.AMQRPwt}
            onChange={formik.handleChange}
            error={formik.touched.AMQRPwt && Boolean(formik.errors.AMQRPwt)}
            helperText={formik.touched.AMQRPwt && formik.errors.AMQRPwt}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start"> Kg</InputAdornment>
              ),
            }}
          />
          <TextField
            label="remark"
            id="remark"
            type="text"
            autoComplete="off"
            value={formik.values.remark}
            onChange={formik.handleChange}
            error={formik.touched.remark && Boolean(formik.errors.remark)}
            helperText={formik.touched.remark && formik.errors.remark}
            className={clsx(classes.margin, classes.textField)}
          />
          <IconButton type="submit">
            <AddCircleRoundedIcon />
          </IconButton>
        </form>
      </div>
    </div>
  );
}
