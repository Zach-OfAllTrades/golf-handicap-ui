import {
  Dialog,
  Button,
  DialogTitle,
  DialogContentText,
  DialogContent,
  TextField,
  DialogActions,
  Grid,
  Alert,
} from "@mui/material";
import { Remove, CalendarViewWeek } from "@mui/icons-material";
import React, { useState } from "react";
import LocalDatePicker from "../date/DatePicker";
import { saveRounds } from "../../../services/RoundService";
import { getUserId } from "../../../temp_redux/reduxMock";
import dayjs from "dayjs";
import { BUTTON_COLORS, FETCH_KEYS, STANDARD_DATE_FORMAT } from "../../../utils/general";
import { useFetch } from "../../../hooks/useFetch";
import ScoreCard from "../../dashboard/scores/Scorecard";
import SelectCourse from "./SelectCourse";
import AddCourse from "./AddCourse";
import StandardButton, { BUTTON_VARIANTS } from "../../atoms/button/StandardButton";

const AddScoreModal = ({ open, onClose }) => {
  const { data, isLoading, isError } = useFetch(FETCH_KEYS.COURSES);

  const [ags, setAgs] = useState();
  const [score, setScore] = useState();
  const [tee, setTee] = useState();
  const [date, setDate] = useState();
  const [saveError, setSaveError] = useState(false);
  const [showScorecard, isShowingScorecard] = useState(false);
  const [addingCourse, isAddingcourse] = useState(false);

  if (isLoading) {
    return <></>;
  }

  const toggleDetails = () => {
    isShowingScorecard(!showScorecard);
  };

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

  const handleAddClick = () => {
    isAddingcourse(true);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add a Round</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter your round information so that it can be added to your profile.
        </DialogContentText>
        <Grid container>
          {addingCourse ? (
            <AddCourse />
          ) : (
            <SelectCourse
              courses={data}
              setTee={setTee}
              handleAddClick={handleAddClick}
            />
          )}
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
          {showScorecard && <ScoreCard teeName={tee.teeName} />}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Grid container spacing={1} marginLeft={1} marginRight={1}>
          <Grid item xs={6}>
            <Button
              onClick={toggleDetails}
              disabled={tee === undefined}
              startIcon={showScorecard ? <Remove /> : <CalendarViewWeek />}
            >
              {showScorecard ? "Close" : "Enter"} Detailed Score
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Grid flex container spacing={1} sx={{ justifyContent: "right" }}>
              <Grid item>
                <StandardButton
                  handleClick={onClose}
                  variant={BUTTON_VARIANTS.secondary}
                >
                  Cancel
                </StandardButton>
              </Grid>
              <Grid item>
                <StandardButton
                  handleClick={onSubmit}
                  variant={BUTTON_VARIANTS.primary}
                >
                  Submit
                </StandardButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

export default AddScoreModal;
