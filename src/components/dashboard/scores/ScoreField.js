import React, { useRef, useState } from "react";
import { TextField } from "@mui/material";

const ScoreField = ({ score, setScores }) => {
  const [editing, isEditing] = useState(score.format.border.length >= 0);

  return (
    <>
      {!editing ? (
        <div style={score.format} onClick={() => isEditing(true)}>
          {score.strokes}
        </div>
      ) : (
        <TextField
          autoFocus
          variant="standard"
          size="small"
          margin="none"
          value={score.strokes}
          onBlur={(e) => e.target.value.length > 0 && isEditing(false)}
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
