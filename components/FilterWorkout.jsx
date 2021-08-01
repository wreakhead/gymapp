import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import { MenuItem } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import { IconButton } from "@material-ui/core";
import useSWR from "swr";
import { getWorkoutData } from "@auth/auth";
import { Button } from "@material-ui/core";

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
  Button: {
    marginTop: "25px",
  },
}));

const FilterWorkout = () => {
  const classes = useStyles();
  const { data } = useSWR("workoutsuggestion", getWorkoutData, {
    refreshInterval: 1000,
  });
  console.log(new Date().getMonth());

  const formSubmitted = async (event) => {};
  const formik = useFormik({
    initialValues: {
      year: "",
      month: "",
    },

    onSubmit: (val) => {
      formSubmitted(val);
    },
  });
  const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className={classes.root}>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            className={clsx(classes.margin, classes.textField)}
            label="Year"
            id="year"
            name="year"
            select
            value={formik.values.year}
            onChange={formik.handleChange}
            error={formik.touched.year && Boolean(formik.errors.year)}
            helperText={formik.touched.year && formik.errors.year}
          >
            {data?.dates.map((date) => {
              return (
                <MenuItem key={date} value={date}>
                  {date}
                </MenuItem>
              );
            })}
          </TextField>
          <TextField
            className={clsx(classes.margin, classes.textField)}
            label="Month"
            id="month"
            name="month"
            select
            value={formik.values.month}
            onChange={formik.handleChange}
            error={formik.touched.month && Boolean(formik.errors.month)}
            helperText={formik.touched.month && formik.errors.month}
          >
            {months.map((month) => {
              return (
                <MenuItem key={month} value={month}>
                  {month}
                </MenuItem>
              );
            })}
          </TextField>

          <Button type="submit" color="primary" className={classes.Button}>
            Filter
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FilterWorkout;
