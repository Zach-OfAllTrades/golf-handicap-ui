import React, { useReducer } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { COLORS, MOCK_SCORECARD } from "../../../utils/general"
import ScoreField from "./ScoreField";

const ScoreCard = ({ teeName = "BLUE", scorecard = MOCK_SCORECARD }) => {
  const formatScore = (score) => {
    const toPar = score.strokes - score.par;
    return {
      border: toPar !== 0 ? "1px solid black" : "",
      borderRadius: toPar < 0 ? "50%" : "",
    };
  };

  const [scores, setScores] = useReducer(
    (scores, payload) => {
      const scoreObj = scores.find((score) => score.number === payload.number);
      scoreObj.strokes = payload.strokes;
      scoreObj.format = formatScore(payload);
      return [...scores];
    },
    scorecard.holes.map((hole) => {
      const { number, par, handicap } = hole;
      return {
        number,
        par,
        handicap,
        strokes: undefined,
        format: { border: "", borderRadius: "" },
      };
    })
  );

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead>
          <TableRow sx={{backgroundColor: COLORS.melon}}>
            <TableCell>HOLE</TableCell>
            {scorecard.holes.map((hole) => (
              <TableCell align="center">{hole.number}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{teeName}</TableCell>
            {scorecard.holes.map((hole) => (
              <TableCell align="center">{hole.yardage}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>HANDICAP</TableCell>
            {scorecard.holes.map((hole) => (
              <TableCell align="center">{hole.handicap}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>PAR</TableCell>
            {scorecard.holes.map((hole) => (
              <TableCell align="center">{hole.par}</TableCell>
            ))}
          </TableRow>
          <TableRow
            key="score"
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell>SCORE</TableCell>
            {scores.map((score) => (
              <TableCell align="center">
                <ScoreField score={score} setScores={setScores} />
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScoreCard;
