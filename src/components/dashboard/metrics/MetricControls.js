import { Button, Grid, Select, MenuItem } from "@mui/material";
import React from "react";
import { TREND_MEASURMENTS } from "../../../utils/general";
import MetricButton from "../../organisms/card/metric/MetricButton";
import { BORDER } from "../../organisms/card/metric/MetricCard.style";

const { mainBorder } = BORDER;

const MetricControls = ({ currentTrend, setTrendMeasurement }) => {
  return (
    <Grid container sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
      {TREND_MEASURMENTS.map((measurement) => (
        <MetricButton
          measurement={measurement}
          currentTrend={currentTrend}
          setTrend={setTrendMeasurement}
        />
      ))}
    </Grid>
  );
};

export default MetricControls;
