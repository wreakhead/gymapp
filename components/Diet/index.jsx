import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { checkLoggedIn } from "@auth/auth";
import AddFood from "./addFood";
import DietDash from "./DietDash";
import Macros from "./Macros";
import FoodBank from "./FoodBank";
import AddMeal from "./AddMeal";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "120px",
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
            <div className="dietDiv">
              <DietDash />
            </div>
          </Grid>
          {/* <Grid item xs={5} sm={5}>
            <div className="dietDiv">
              <Macros />
            </div>
          </Grid>
          <Grid item xs={7} sm={7}>
            <div className="dietDiv">suggestion</div>
          </Grid> */}
          <Grid item xs={12}>
            <AddMeal />
          </Grid>
          <Grid item xs={12}>
            <FoodBank type="breakfast" />
            <FoodBank type="lunch" />
            <FoodBank type="snacks" />
            <FoodBank type="dinner" />
          </Grid>
          <Grid item xs={12}>
            <AddFood />
          </Grid>
        </Grid>
      </div>
    );
  }
};
export default DietLayout;
