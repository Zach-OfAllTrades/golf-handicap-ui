import { Grid } from "@mui/material";
import React from "react";
import MetricCard from "../../organisms/card/MetricCard";

const MetricDeck = ({ metrics, trendMeasurement = "month" }) => {
  return (
    <Grid container wrap="nowrap" overflow="scroll">
      {metrics.map((metric) => (
        <MetricCard
          metric={metric}
          trendMeasurement={trendMeasurement}
        ></MetricCard>
      ))}
    </Grid>
  );
};

export default MetricDeck;
