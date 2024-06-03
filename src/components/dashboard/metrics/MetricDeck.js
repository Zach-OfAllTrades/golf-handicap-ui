import { Grid } from "@mui/material";
import React from "react";
import MetricCard from "../../organisms/card/metric/MetricCard";
import { BORDER } from "../../organisms/card/metric/MetricCard.style";

const { mainBorder } = BORDER;

const MetricDeck = ({ metrics, trendMeasurement = "month" }) => {
  return (
    <Grid container overflow="scroll" flexWrap="nowrap">
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
