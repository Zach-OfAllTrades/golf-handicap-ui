import React, { useReducer } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import dayjs from "dayjs";
import { useFetch } from "../../../hooks/useFetch";
import { FETCH_KEYS, MOCK_SCORECARD } from "../../../utils/general";
import { TextField } from "@mui/material";
import ScoreField from "./ScoreField";

const ScoreCard = ({ teeName = "BLUE", scorecard = MOCK_SCORECARD }) => {
  //   const { data, isLoading, isError } = useFetch(FETCH_KEYS.ROUNDS);
  //   const data = MOCK_SCORECARD;

  // initial score array = custom obj w/ hole.number, hole.par, hole.handicap with score undefined and format key
  // onBlur pass in score and set strokes and calc format
  // format func that also decides ags(max score) for that hole
  // completion tracker?

  const formatScore = (score) => {
    const toPar = score.strokes - score.par;
    return {
      border: toPar !== 0 ? "1px solid black" : "",
      borderRadius: toPar < 0 ? "50%" : "",
    };
  };

  const [scores, setScores] = useReducer(
    (scores, payload) => {
      console.log(scores);
      const scoreObj = scores.find((score) => score.number === payload.number);
      scoreObj.strokes = payload.strokes;
      scoreObj.format = formatScore(payload);
      return scores;
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
          <TableRow>
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
                {/* <div style={score.format}>
                  <TextField
                    variant="standard"
                    size="small"
                    margin="none"
                    onBlur={() => {
                      {
                      }
                    }}
                    onChange={(e) => {
                      e.preventDefault();
                      setScores({
                        number: score.number,
                        par: score.par,
                        strokes: e.target.value,
                      });
                    }}
                  >
                    {score.strokes}
                  </TextField>
                </div> */}
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
