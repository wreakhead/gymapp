import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Doughnut } from "react-chartjs-2";
import useSWR from "swr";
import { getIntake } from "@auth/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "10px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    display: "block",
  },
  Doughnut: {
    padding: "10px",
    color: "#fff",
  },
}));

export default function DietDash() {
  const classes = useStyles();
  const { data } = useSWR("intakeMacros", getIntake, { refreshInterval: 1000 });
  console.log(data);

  const checkData = () => {
    if (data) return true;
    else return false;
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} className={classes.Doughnut}>
          {checkData() ? (
            <Doughnut
              data={{
                datasets: [
                  {
                    label: "My First Dataset",
                    data: [
                      data?.totalProtein,
                      data?.totalCarbs,
                      data?.totalFat,
                    ],
                    backgroundColor: [
                      "rgb(255, 99, 132)",
                      "rgb(54, 162, 235)",
                      "rgb(255, 205, 86)",
                    ],

                    hoverOffset: 3,
                  },
                ],
              }}
              height={200}
              width={200}
              options={{
                maintainAspectRatio: false,
              }}
            />
          ) : (
            <></>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.paper}>
            <h1>Diet Intake</h1>
            <h3>Calories: {data ? <>{data.totalCalories}</> : <>0</>}</h3>
            <h3>Fats (Yellow): {data ? <>{data.totalFat}</> : <>0</>}</h3>
            <h3>Carbs (Blue): {data ? <>{data.totalCarbs}</> : <>0</>}</h3>
            <h3>Protein (Red): {data ? <>{data.totalProtein}</> : <>0</>}</h3>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
