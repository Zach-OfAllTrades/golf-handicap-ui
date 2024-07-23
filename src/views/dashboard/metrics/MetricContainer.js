import { Grid } from "@mui/material";
import React, { useState } from "react";
import MetricCard from "../../../components/organisms/card/metric/MetricCard";
import { BORDER } from "../../../components/organisms/card/metric/MetricCard.style";
import MetricDeck from "./MetricDeck";
import MetricControls from "./MetricControls";
import { TREND_MEASURMENTS } from "../../../utils/general";

const { mainBorder } = BORDER;

const MetricContainer = ({ metrics }) => {
  // look into react query for caching results for setting trend measurements
  const [trendMeasurement, setTrendMeasurement] = useState(
    TREND_MEASURMENTS[1].id
  );

  return (
    <Grid flex container sx={{ flexDirection: "column" }}>
      {/* <Grid sx={{ alignSelf: "end" }}> */}
        <MetricControls
          currentTrend={trendMeasurement}
          setTrendMeasurement={setTrendMeasurement}
        />
      {/* </Grid> */}
      <MetricDeck metrics={metrics} trendMeasurement={trendMeasurement} />
    </Grid>
  );
};

export default MetricContainer;
