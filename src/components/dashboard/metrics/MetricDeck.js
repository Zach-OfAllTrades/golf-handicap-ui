import { Grid } from "@mui/material";
import React from "react";
import MetricCard from "../../organisms/card/MetricCard";
import { COLORS } from "../../../utils/general";

const MetricDeck = ({ metrics, trendMeasurement = "month" }) => {
  return (
    <Grid container overflow="scroll" sx={{backgroundColor: COLORS.dust, borderRadius: 2, height: 450, width: 800}}>
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
