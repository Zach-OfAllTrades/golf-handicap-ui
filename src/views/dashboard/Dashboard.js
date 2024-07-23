import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import AddScoreModal from "../../components/organisms/modal/AddScoreModal";
import ScoresTable from "./scores/ScoresTable";
import { FETCH_KEYS } from "../../utils/general";
import { useFetch } from "../../hooks/useFetch";
import MetricDeck from "./metrics/MetricDeck";
import MeCard from "../../components/organisms/card/me/MeCard";
import MetricContainer from "./metrics/MetricContainer";
import ScoreChart from "../../components/organisms/chart/ScoreChart";

const border = {
  border: "1px solid red",
};

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
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={3}>
              <MeCard handleAddClick={handleAddClick} />
            </Grid>
            <Grid item xs={9}>
              {data && <MetricContainer metrics={data} />}
              <ScoreChart/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <ScoresTable /> /*Temp until metric table */
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
