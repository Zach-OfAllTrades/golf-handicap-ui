import {
  TextField,
  Grid,
  IconButton,
  Tooltip,
} from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import React, { useState } from "react";
import AddTee from "./AddTee";

const AddCourse = ({ courses, setTee }) => {
  const [teeError, isTeeError] = useState(false);
  const defaultTee = {
    teeName: "",
    rating: "",
    slope: "",
    yardage: "",
    par: "",
  };
  const [course, setCourse] = useState({
    courseName: "",
    displayName: "",
    location: "",
  });
  const [tees, setTees] = useState([{ key: 0, tee: defaultTee }]);

  const handleCourseChange = (value, id) => {
    const currentCourse = course;
    currentCourse[id] = value;
    setCourse(currentCourse);
  };

  const handleAddTee = () => {
    const key = tees.length;
    setTees([...tees, { key, tee: defaultTee }]);
  };

  const handleTeeChange = (change, index) => {
    const teeToChange = tees.find((tee) => tee.key === index);
    teeToChange.tee[change.id] = change.value;
    const filteredTees = tees.filter((tee) => tee.key !== index);
    setTees([...filteredTees, teeToChange]);
  };

  return (
    <Grid container spacing={1} marginY={1}>
      <Grid item xs={4}>
        <TextField
          margin="dense"
          id="courseName"
          label="Course Name"
          variant="outlined"
          onChange={(e) => {
            handleCourseChange(e.target.value, e.target.id);
          }}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          margin="dense"
          id="displayName"
          label="Short Name"
          variant="outlined"
          onChange={(e) => {
            handleCourseChange(e.target.value, e.target.id);
          }}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          margin="dense"
          id="location"
          label="City, State"
          variant="outlined"
          onChange={(e) => {
            handleCourseChange(e.target.value, e.target.id);
          }}
        />
      </Grid>
      {tees.map((tee, index) => (
        <AddTee onTeeChange={handleTeeChange} index={index}></AddTee>
      ))}
      <Tooltip title="Add Another Tee">
        <IconButton disabled={tees.length > 4} onClick={handleAddTee}>
          <AddCircle />
        </IconButton>
      </Tooltip>
    </Grid>
  );
};

export default AddCourse;
