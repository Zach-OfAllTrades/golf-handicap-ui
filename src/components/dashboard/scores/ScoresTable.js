import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import dayjs from "dayjs";
import { useRounds } from "../../../hooks/useRounds";

const ScoresTable = () => {
  const { data, isLoading, isError } = useRounds();
  if (isLoading) {
    return <></>; // TODO: Add loading skeleton
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Course</TableCell>
            <TableCell align="right">Tee</TableCell>
            <TableCell align="right">Score</TableCell>
            <TableCell align="right">AGS</TableCell>
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
              <TableCell align="right">{row.tee.teeName}</TableCell>
              <TableCell align="right">{row.score}</TableCell>
              <TableCell align="right">{row.ags}</TableCell>
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
