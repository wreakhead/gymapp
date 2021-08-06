import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import InputAdornment from "@material-ui/core/InputAdornment";
import { MenuItem } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import { IconButton } from "@material-ui/core";
import { addWorkoutData, getWorkoutData } from "@auth/auth";
import { useRouter } from "next/router";
import { addFoodSchema } from "@validators/addFoodSchema";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: { width: "150px" },
}));

export default function AddFood() {
  const classes = useStyles();
  const router = useRouter();
  const formSubmitted = async (event) => {};

  const formik = useFormik({
    initialValues: {
      type: "",
      name: "",
      calories: 0,
      carbs: 0,
      fat: 0,
    },
    validationSchema: addFoodSchema,
    onSubmit: (val) => {
      formSubmitted(val);
    },
  });

  return (
    <div className="foodcard">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2>Add Food</h2>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.root}>
            <form onSubmit={formik.handleSubmit}>
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
                <MenuItem key="breakfast" value="breakfast">
                  breakfast
                </MenuItem>
                <MenuItem key="lunch" value="lunch">
                  lunch
                </MenuItem>
                <MenuItem key="snack" value="snack">
                  snack
                </MenuItem>
                <MenuItem key="dinner" value="dinner">
                  dinner
                </MenuItem>
              </TextField>
              <TextField
                className={clsx(classes.margin, classes.textField)}
                label="Food"
                id="name"
                type="text"
                autoComplete="off"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />

              <TextField
                label="calories"
                id="calories"
                type="calories"
                className={clsx(classes.margin, classes.textField)}
                value={formik.values.calories}
                onChange={formik.handleChange}
                error={
                  formik.touched.calories && Boolean(formik.errors.calories)
                }
                helperText={formik.touched.calories && formik.errors.calories}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">cal</InputAdornment>
                  ),
                }}
              />
              <TextField
                label="carbs"
                id="carbs"
                type="carbs"
                className={clsx(classes.margin, classes.textField)}
                value={formik.values.carbs}
                onChange={formik.handleChange}
                error={formik.touched.carbs && Boolean(formik.errors.carbs)}
                helperText={formik.touched.carbs && formik.errors.carbs}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">cal</InputAdornment>
                  ),
                }}
              />
              <TextField
                label="fat"
                id="fat"
                type="fat"
                className={clsx(classes.margin, classes.textField)}
                value={formik.values.fat}
                onChange={formik.handleChange}
                error={formik.touched.fat && Boolean(formik.errors.fat)}
                helperText={formik.touched.fat && formik.errors.fat}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">cal</InputAdornment>
                  ),
                }}
              />

              <IconButton type="submit">
                <AddCircleRoundedIcon />
              </IconButton>
            </form>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
