import {
  TextField,
  Grid,
  Autocomplete,
  IconButton,
  Tooltip,
} from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import React, { useState } from "react";

const SelectCourse = ({ courses, setTee, handleAddClick }) => {
  const [selectedCourse, setSelectedCourse] = useState();

  return (
    <Grid container spacing={1} marginY={1}>
      <Grid item xs={6}>
        <Autocomplete
          disablePortal
          margin="dense"
          getOptionLabel={(course) => course.displayName}
          options={courses}
          onChange={(e, newValue) => {
            setSelectedCourse(newValue);
          }}
          renderInput={(params) => <TextField {...params} label="Course" />}
        />
      </Grid>
      <Grid item xs={3}>
        <Autocomplete
          disablePortal
          disabled={!selectedCourse}
          margin="dense"
          getOptionLabel={(tees) => tees.teeName}
          options={selectedCourse?.tees ?? []}
          onChange={(e, newValue) => {
            setTee(newValue);
          }}
          renderInput={(params) => <TextField {...params} label="Tees" />}
        />
      </Grid>
      <Grid item xs={3}>
        <Tooltip title="Add Course">
          <IconButton onClick={handleAddClick}>
            <AddCircle />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default SelectCourse;
