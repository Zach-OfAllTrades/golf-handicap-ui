import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import dayjs from "dayjs";
import { useFetch } from "../../../hooks/useFetch";
import { FETCH_KEYS } from "../../../utils/general";

const ScoresTable = () => {
  const { data, isLoading, isError } = useFetch(FETCH_KEYS.ROUNDS);
  if (isLoading) {
    return <></>; // TODO: Add loading skeleton
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Course</TableCell>
            <TableCell align="left">Tee</TableCell>
            <TableCell align="">Score</TableCell>
            <TableCell align="">AGS</TableCell>
            <TableCell align="">Diff</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.tee.course.displayName}
              </TableCell>
              <TableCell align="left">{row.tee.teeName}</TableCell>
              <TableCell align="">{row.score}</TableCell>
              <TableCell align="">{row.ags}</TableCell>
              <TableCell align="">+{row.ags - 72}</TableCell> {/*TODO: calculate & format actual diff here*/}
              <TableCell align="right">
                {dayjs(row.date).format("MMM DD, YYYY")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScoresTable;
