import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Dashboard from "./Dasboard";
import TotalTime from "./TotalTime";
import Bargraph from "./Bargraph";
import AddWorkout from "./AddWorkout";
import Table from "./SmallTable";
import UserLogo from "./UserLogo";
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
  bargraph:{
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor:"#bdbdbd"
    
  }
}));

const HomeLayout = () => {
  const classes = useStyles();
  if (checkLoggedIn) {
    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper variant="outlined" square className={classes.paper}>
              <Dashboard />
            </Paper>
          </Grid>
          {/* <Grid item xs={4}>
            <Paper variant="outlined" square className={classes.paper}>
              <UserLogo />
            </Paper>
          </Grid> */}
          <Grid item xs={12} sm={4}>
            <Paper variant="outlined" square className={classes.paper}>
              stats
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Paper variant="outlined" square className={classes.paper}>
              <TotalTime />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper variant="outlined" square className={classes.bargraph}>
              <Bargraph />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper variant="outlined" square className={classes.paper}>
              <AddWorkout />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper variant="outlined" square className={classes.paper}>
              <Table />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
};
export default HomeLayout;
