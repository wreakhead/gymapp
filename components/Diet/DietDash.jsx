import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
  addMoreFood: {
    display: "flex",
    justifyContent: "center",
    top: "50%",
  },
}));

export default function DietDash() {
  const classes = useStyles();
  const { data } = useSWR("intakeMacros", getIntake, { refreshInterval: 1000 });

  const checkData = () => {
    if (
      data?.totalCalories === 0 ||
      (data?.totalProtein === 0 &&
        data?.totalCarbs === 0 &&
        data?.totalFat === 0)
    )
      return false;
    else return true;
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
                    label: "Diet data",
                    data: [
                      data?.totalProtein,
                      data?.totalCarbs,
                      data?.totalFat,
                    ],
                    backgroundColor: [
                      "rgb(255, 99, 132)",
                      "#00bcd4",
                      "#ffc107",
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
            <Doughnut
              data={{
                datasets: [
                  {
                    label: "no data",
                    data: [100],
                    backgroundColor: ["#90a4ae"],

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
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.paper}>
            <h1>Diet Intake</h1>
            <h3 className="Color3">
              Calories: {data ? <>{data.totalCalories}</> : <>0</>}
            </h3>
            <h3 className="Color3" style={{ color: "#ffc107" }}>
              Fats: {data ? <>{data.totalFat}</> : <>0</>}
            </h3>
            <h3 className="Color3" style={{ color: "#00bcd4" }}>
              Carbs: {data ? <>{data.totalCarbs}</> : <>0</>}
            </h3>
            <h3 className="Color3" style={{ color: "rgb(255, 99, 132)" }}>
              Protein: {data ? <>{data.totalProtein}</> : <>0</>}
            </h3>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
