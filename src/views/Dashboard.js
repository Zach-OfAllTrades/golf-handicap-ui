import { Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import AddScoreModal from "../components/modal/AddScoreModal";
import ScoresTable from "../components/dashboard/scores/ScoresTable";
import { FETCH_KEYS } from "../utils/general";
import { useFetch } from "../hooks/useFetch";
import MetricDeck from "../components/dashboard/metrics/MetricDeck";
import MeCard from "../components/dashboard/me/MeCard";

const Dashboard = () => {
  const [addIsOpen, setAddIsOpen] = useState(false);
  const { data, isLoading, isError } = useFetch(FETCH_KEYS.METRICS);
  console.log(data);

  const handleAddClick = () => {
    setAddIsOpen(true);
  };

  const handleClose = () => {
    setAddIsOpen(false);
  };

  return (
    <Container maxWidth="false">
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
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={3}>
              <MeCard />
            </Grid>
            <Grid item xs={9}>
              {data && <MetricDeck metrics={data} />}
            </Grid>
          </Grid>

          {/* <HandicapCard /> */}
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
