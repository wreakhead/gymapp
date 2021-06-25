import SmallTable from "@components/HomeLayout/SmallTable";
import AddWorkout from "@components/HomeLayout/AddWorkout";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:"20px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
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
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Paper variant="outlined" square className={classes.paper}>
            <AddWorkout />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper variant="outlined" square className={classes.paper}>
            <SmallTable />
          </Paper>
        </Grid>
      </Grid>
      
    </>
  );
};
export default workoutPage;
