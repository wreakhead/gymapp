import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import InputAdornment from "@material-ui/core/InputAdornment";
import { MenuItem } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import { IconButton } from "@material-ui/core";
import {
  addWorkoutData,
  getFoodData,
  getWorkoutData,
  updateFoodData,
} from "@auth/auth";
import { useRouter } from "next/router";
import { addFoodSchema } from "@validators/addFoodSchema";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Autocomplete from "@material-ui/lab/Autocomplete";
import useSWR from "swr";

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

  const { data } = useSWR("getfood", getFoodData, { refreshInterval: 1000 });
  // console.log(data?.names);

  const formSubmitted = async (event) => {
    
    const update = await updateFoodData(event);
    console.log(update);
  };

  const formik = useFormik({
    initialValues: {
      category: "",
      name: "",
      calories: 0,
      carbs: 0,
      fat: 0,
      fiber: 0,
      protein: 0,
    },
    validationSchema: addFoodSchema,
    onSubmit: (val) => {
      formSubmitted(val);
    },
  });

  return (
    <div className="">
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
                label="category"
                id="category"
                name="category"
                select
                value={formik.values.category}
                onChange={formik.handleChange}
                error={
                  formik.touched.category && Boolean(formik.errors.category)
                }
                helperText={formik.touched.category && formik.errors.category}
              >
                <MenuItem key="fruit" value="fruit">
                  fruit
                </MenuItem>
                <MenuItem key=" vegetable" value=" vegetable">
                  vegetable
                </MenuItem>
                <MenuItem key="meat" value="meat">
                  meat
                </MenuItem>
                <MenuItem key="snack" value="snack">
                  snack
                </MenuItem>
              </TextField>
              <TextField
                className={clsx(classes.margin, classes.textField)}
                label="name"
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
                type="number"
                className={clsx(classes.margin, classes.textField)}
                value={formik.values.calories}
                onChange={formik.handleChange}
                error={
                  formik.touched.calories && Boolean(formik.errors.calories)
                }
                helperText={formik.touched.calories && formik.errors.calories}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">/100 gm</InputAdornment>
                  ),
                }}
              />
              <TextField
                label="carbs"
                id="carbs"
                type="number"
                className={clsx(classes.margin, classes.textField)}
                value={formik.values.carbs}
                onChange={formik.handleChange}
                error={formik.touched.carbs && Boolean(formik.errors.carbs)}
                helperText={formik.touched.carbs && formik.errors.carbs}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">/100 gm</InputAdornment>
                  ),
                }}
              />
              <TextField
                label="fat"
                id="fat"
                type="number"
                className={clsx(classes.margin, classes.textField)}
                value={formik.values.fat}
                onChange={formik.handleChange}
                error={formik.touched.fat && Boolean(formik.errors.fat)}
                helperText={formik.touched.fat && formik.errors.fat}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">/100 gm</InputAdornment>
                  ),
                }}
              />
              <TextField
                label="fiber"
                id="fiber"
                type="number"
                className={clsx(classes.margin, classes.textField)}
                value={formik.values.fiber}
                onChange={formik.handleChange}
                error={formik.touched.fiber && Boolean(formik.errors.fiber)}
                helperText={formik.touched.fiber && formik.errors.fiber}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">/100 gm</InputAdornment>
                  ),
                }}
              />
              <TextField
                label="protein"
                id="protein"
                type="number"
                className={clsx(classes.margin, classes.textField)}
                value={formik.values.protein}
                onChange={formik.handleChange}
                error={formik.touched.protein && Boolean(formik.errors.protein)}
                helperText={formik.touched.protein && formik.errors.protein}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">/100 gm</InputAdornment>
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
