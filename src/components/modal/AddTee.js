import {
  TextField,
  Grid,
} from "@mui/material";
import React, { useState } from "react";

const AddTee = ({onTeeChange, index}) => {

  const handleTeeChange = (value, id) => {
    onTeeChange({value, id}, index);
  };

  return (
    <Grid container spacing={1} marginY={1}>
      <Grid item xs={4}>
        <TextField
          margin="dense"
          id="teeName"
          label="Tee Name"
          variant="outlined"
          onChange={(e) => {
            handleTeeChange(e.target.value, e.target.id);
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          margin="dense"
          id="rating"
          label="Rating"
          variant="outlined"
          onChange={(e) => {
            handleTeeChange(e.target.value, e.target.id);
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          margin="dense"
          id="slope"
          label="Slope"
          variant="outlined"
          onChange={(e) => {
            handleTeeChange(e.target.value, e.target.id);
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          margin="dense"
          id="yardage"
          label="Yardage"
          variant="outlined"
          onChange={(e) => {
            handleTeeChange(e.target.value, e.target.id);
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          margin="dense"
          id="par"
          label="Par"
          variant="outlined"
          onChange={(e) => {
            handleTeeChange(e.target.value, e.target.id);
          }}
        />
      </Grid>
    </Grid>
  );
};

export default AddTee;
