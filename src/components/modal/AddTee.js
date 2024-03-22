import { Delete } from "@mui/icons-material";
import { TextField, Grid, IconButton } from "@mui/material";
import React, { useState } from "react";

const AddTee = ({ onTeeChange, index }) => {
  const handleTeeChange = (value, id) => {
    onTeeChange({ value, id }, index);
  };

  return (
    <Grid container spacing={1} marginY={1}>
      <Grid item xs={3}>
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
          label="Yards"
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
      <Grid item xs={1}>
        <IconButton>
          <Delete></Delete>
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default AddTee;
