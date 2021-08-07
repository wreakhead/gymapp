import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import InputAdornment from "@material-ui/core/InputAdornment";
import { MenuItem } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import { IconButton } from "@material-ui/core";
import { addDietData, getFoodData } from "@auth/auth";
import { useRouter } from "next/router";
import { addMealSchema } from "@validators/addFoodSchema";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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

export default function AddMeal() {
  const classes = useStyles();
  const router = useRouter();

  const { data } = useSWR("getfood", getFoodData, { refreshInterval: 1000 });
  const formSubmitted = async (event) => {
    console.log(event);
    const addData = await addDietData(event);
    console.log(addData);
  };

  const formik = useFormik({
    initialValues: {
      type: "",
      name: "",
      amount: 0,
    },
    validationSchema: addMealSchema,
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
          <h2>Add Your Meals</h2>
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
                <MenuItem key="snacks" value="snacks">
                  snacks
                </MenuItem>
                <MenuItem key="dinner" value="dinner">
                  dinner
                </MenuItem>
              </TextField>

              <TextField
                className={clsx(classes.margin, classes.textField)}
                label="Food"
                id="name"
                name="name"
                select
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              >
                <MenuItem key="" value=""></MenuItem>
                {data?.names.map((name) => {
                  return (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  );
                })}
              </TextField>

              <TextField
                label="Amount"
                id="amount"
                type="number"
                className={clsx(classes.margin, classes.textField)}
                value={formik.values.amount}
                onChange={formik.handleChange}
                error={formik.touched.amount && Boolean(formik.errors.amount)}
                helperText={formik.touched.amount && formik.errors.amount}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">gm</InputAdornment>
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
