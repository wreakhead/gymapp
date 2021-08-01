import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Dashboard from "./Dasboard";
import TotalTime from "./TotalTime";
import Pushgraph from "./Pushgraph";
import Pullgraph from "./Pullgraph";
import Leggraph from "./Leggraph";
import Stats from "./Stats";
import { checkLoggedIn } from "@auth/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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

const HomeLayout = () => {
  const classes = useStyles();
  if (checkLoggedIn) {
    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper variant="outlined"  className={classes.paper}>
              <Dashboard />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper variant="outlined"  className={classes.bargraph}>
              <Stats />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Paper variant="outlined"  className={classes.paper}>
              <TotalTime />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper variant="outlined"  className={classes.bargraph}>
              <Pushgraph />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper variant="outlined"  className={classes.bargraph}>
              <Pullgraph />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper variant="outlined"  className={classes.bargraph}>
              <Leggraph />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
};
export default HomeLayout;
