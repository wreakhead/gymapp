import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";
import IconButton from "@material-ui/core/IconButton";
import { delWorkoutData, getWorkoutData } from "@auth/auth";
import useSWR from "swr";
import { useState } from "react";
import { format } from "timeago.js";

const LastWeekTable = (filter) => {
  const filterData = useState(null);

  const { data } = useSWR("getworkoutdata", getWorkoutData, {
    refreshInterval: 1000,
  });

  const deleteData = async (props) => {
    const check = await delWorkoutData(props);
  };
  const week = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
  const convertDate = (props) => {
    const date = new Date(props);
    return <>{week[date.getDay()]}</>;
  };

  return (
    <>
      <h4>Last week same day</h4>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Day</TableCell>
              <TableCell align="right">Workout</TableCell>

              <TableCell align="right">sets</TableCell>
              <TableCell align="right">reps</TableCell>
              <TableCell align="right">weight</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.workout.map((workout) => {
              if (format(workout.date) === "6 days ago") {
                return (
                  <TableRow key={workout._id}>
                    <TableCell component="th" scope="row">
                      <h3>{convertDate(workout.date)}</h3>
                    </TableCell>
                    <TableCell align="right">{workout.name}</TableCell>

                    <TableCell align="right">{workout.sets}</TableCell>
                    <TableCell align="right">{workout.reps}</TableCell>
                    <TableCell align="right">{workout.weight}</TableCell>

                    <TableCell align="right">
                      <IconButton
                        aria-label="delete"
                        onClick={() => {
                          deleteData({ _id: workout._id });
                        }}
                      >
                        <DeleteOutlineRoundedIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              }
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default LastWeekTable;
