import { Grid } from "@mui/material";
import React from "react";
import MetricCard from "../../organisms/card/MetricCard";
import HandicapCard from "../handicap/HandicapCard";

const MetricDeck = ({ metrics }) => {
  return (
    <Grid container wrap="nowrap" overflow="scroll">
      <HandicapCard />
      {metrics.map((metric) => (
        <MetricCard metric={Object.values(metric)[0]} title={Object.keys(metric)[0]}></MetricCard>
      ))}
    </Grid>
  );
};

export default MetricDeck;
