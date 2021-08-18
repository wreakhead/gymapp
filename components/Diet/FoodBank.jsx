import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import useSWR from "swr";
import { delDietData, getFoodLog } from "@auth/auth";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  table: {},
});

export default function FoodBank(props) {
  const classes = useStyles();
  const { data } = useSWR(`${props.type}`, getFoodLog, {
    refreshInterval: 1000,
  });

  const deleteData = async (event) => {
    console.log(event);
    const check = await delDietData(event);
  };

  return (
    <Accordion className="Color2">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <h2>{props.type.charAt(0).toUpperCase() + props.type.slice(1)}</h2>
      </AccordionSummary>
      <AccordionDetails className="Color1">
        <TableContainer component={Paper} className="Color1">
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Food</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                <TableCell align="right">Fiber&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.todaysLog.map((row) => (
                <TableRow key={row._id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                  <TableCell align="right">{row.fiber}</TableCell>
                  <IconButton
                    aria-label="delete"
                    onClick={() => {
                      deleteData({ _id: row._id, type: props.type });
                    }}
                  >
                    <DeleteOutlineRoundedIcon />
                  </IconButton>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
}
