import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { checkLoggedIn } from "@auth/auth";
import AddFood from "./addFood";

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

const DietLayout = () => {
  const classes = useStyles();
  if (checkLoggedIn()) {
    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <div className="dietDiv">1</div>
          </Grid>
          <Grid item xs={6} sm={6}>
            <div className="dietDiv">
              <AddFood />
            </div>
          </Grid>
          {/* <Grid item xs={6} sm={3}>
            <div className="dietDiv">3</div>
          </Grid> */}

          <Grid item xs={6} sm={3}>
            <div className="dietDiv">4</div>
          </Grid>
          <Grid item xs={6} sm={3}>
            <div className="dietDiv">5</div>
          </Grid>
        </Grid>
      </div>
    );
  }
};
export default DietLayout;
