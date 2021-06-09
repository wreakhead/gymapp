import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Dashboard from "./Dasboard";
import TotalTime from "./TotalTime";
import Bargraph from "./Bargraph";
import AddWorkout from "./AddWorkout";
import Table from "./Table";
import UserLogo from "./UserLogo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const HomeLayout = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <div className={classes.paper}><Dashboard/></div>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><UserLogo/></Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>stats</Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}><TotalTime/></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><Bargraph/></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><AddWorkout/></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><Table/></Paper>
        </Grid>
        
      </Grid>
    </div>
  );
};
export default HomeLayout;
