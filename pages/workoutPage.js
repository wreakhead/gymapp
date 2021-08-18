import SmallTable from "@components/HomeLayout/SmallTable";
import AddWorkout from "@components/HomeLayout/AddWorkout";
import FilterWorkout from "@components/FilterWorkout";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { checkLoggedIn } from "@auth/auth";
import { Box, Container } from "@material-ui/core";
import LastWeekTable from "@components/HomeLayout/LastWeekTable";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  bargraph: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#eceff1",
  },
}));

const workoutPage = () => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Workout</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <div className={classes.root}>
        {checkLoggedIn() ? (
          <Grid container className={classes.root} spacing={1}>
            <Grid item xs={12} md={8}>
              <div className="dietDiv">
                <AddWorkout />
              </div>
            </Grid>
            <Grid item xs={12} md={8}>
              <SmallTable />
            </Grid>
            <Grid item xs={12} md={8}>
              <LastWeekTable />
            </Grid>
          </Grid>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
export default workoutPage;
