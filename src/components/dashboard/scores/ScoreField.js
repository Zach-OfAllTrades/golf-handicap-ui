import React from "react";
import { TextField } from "@mui/material";

const ScoreField = ({ score, setScores }) => {
  return (
    <>
      {score.format.border.length > 0 ? (
        <div style={score.format}>{score.strokes}</div>
      ) : (
        <TextField
          variant="standard"
          size="small"
          margin="none"
          onBlur={() => {
            {
              /*format cell*/
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
      )}
    </>
  );
};

export default ScoreField;
