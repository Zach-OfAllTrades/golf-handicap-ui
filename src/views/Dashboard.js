import { Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import HandicapCard from "../components/dashboard/HandicapCard";
import AddScoreModal from "../components/modal/AddScoreModal";
import ScoresTable from "../components/dashboard/scores/ScoresTable";
import { FETCH_KEYS } from "../utils/general";
import { useFetch } from "../hooks/useFetch";

const Dashboard = () => {
  const [addIsOpen, setAddIsOpen] = useState(false);
  const { data, isLoading, isError } = useFetch(FETCH_KEYS.METRICS);
  console.log('METRICS: ', data);

  const handleAddClick = () => {
    setAddIsOpen(true);
  };

  const handleClose = () => {
    setAddIsOpen(false);
  };

  return (
    <Container>
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item xs={12}>
          <Grid container columnSpacing={1}>
            <Grid item>
              <Button onClick={handleAddClick}>+</Button>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Add Your Score</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <HandicapCard />
        </Grid>
        <Grid item xs={9}>
          <ScoresTable />
        </Grid>
      </Grid>
      <AddScoreModal open={addIsOpen} onClose={handleClose} />
    </Container>
  );
};

export default Dashboard;
