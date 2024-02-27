import {
  Dialog,
  Button,
  DialogTitle,
  DialogContentText,
  DialogContent,
  TextField,
  DialogActions,
  Grid,
  Autocomplete,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import LocalDatePicker from "../organisms/date/DatePicker";
import { saveRounds } from "../../services/RoundService";
import { getUserId } from "../../temp_redux/reduxMock";
import dayjs from "dayjs";
import { FETCH_KEYS, STANDARD_DATE_FORMAT } from "../../utils/general";
import { useFetch } from "../../hooks/useFetch";
import ScoreCard from "../dashboard/scores/Scorecard";

const AddScoreModal = ({ open, onClose }) => {
  const { data, isLoading, isError } = useFetch(FETCH_KEYS.COURSES);
  const [selectedCourse, setSelectedCourse] = useState();
  const [ags, setAgs] = useState();
  const [score, setScore] = useState();
  const [tee, setTee] = useState();
  const [date, setDate] = useState();
  const [saveError, setSaveError] = useState(false);

  if (isLoading) {
    return <></>;
  }
  const handleDetailClick = () => {};

  const onSubmit = async () => {
    const userId = getUserId();
    try {
      await saveRounds({
        ags,
        score,
        userId,
        teeId: tee.id,
        date: dayjs(date).format(STANDARD_DATE_FORMAT),
      });
      onClose();
    } catch (error) {
      setSaveError(true);
    }
  };

  const handleDelete = () => {
    setSaveError(false);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add a Round</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter your round information so that it can be added to your profile.
        </DialogContentText>
        <Grid container>
          <Grid container spacing={1} marginY={1}>
            <Grid item xs={6}>
              <Autocomplete
                disablePortal
                margin="dense"
                getOptionLabel={(data) => data.displayName}
                options={data}
                onChange={(e, newValue) => {
                  setSelectedCourse(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Course" />
                )}
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
          </Grid>
          <Grid item xs={12}>
            <LocalDatePicker onChange={setDate} />
          </Grid>
          <Grid container spacing={1} flexDirection={"row"}>
            <Grid item xs={4}>
              <TextField
                margin="dense"
                id="score"
                label="Score"
                variant="outlined"
                onChange={(e) => {
                  setScore(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                margin="dense"
                id="ags"
                label="AGS"
                variant="outlined"
                onChange={(e) => {
                  setAgs(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            {saveError && (
              <Alert
                severity="error"
                variant="outlined"
                onClose={handleDelete}
                sx={{ marginTop: 1 }}
              >
                Error Saving Round
              </Alert>
            )}
          </Grid>
          <ScoreCard />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Grid container spacing={1} marginLeft={1} marginRight={1}>
          <Grid item xs={6}>
            <Button onClick={handleDetailClick}>+ Enter Detailed Score</Button>
          </Grid>
          <Grid item xs={6}>
            <Grid flex container spacing={1} sx={{ justifyContent: "right" }}>
              <Grid item>
                <Button variant="outlined" onClick={onClose}>
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={onSubmit}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

export default AddScoreModal;
