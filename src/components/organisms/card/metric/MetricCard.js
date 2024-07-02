import { Card, CardContent, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { MAIN_METRIC_KEY } from "../../../../utils/general";
import MetricTrend from "./trend/MetricTrend";
import MetricBadge from "./MetricBadge";
import { METRIC_CARD_STYLE, SHARED_STYLE } from "./MetricCard.style";

const { main, secondary } = METRIC_CARD_STYLE;
const { card: sharedCardStyle, flexRow, flexColumn } = SHARED_STYLE;

const MetricCard = ({ metric, trendMeasurement }) => {
  const { card: mainCardStyle, textColor } =
    metric.key === MAIN_METRIC_KEY ? main : secondary;
  const { trend, current } = metric.value;
  const isTrendChange = trend != 0 && trend !== undefined;

  return (
    <Card sx={[mainCardStyle, sharedCardStyle]}>
      <CardContent sx={flexColumn}>
        <Grid container sx={[flexRow, { justifyContent: "space-between" }]}>
          <Grid sx={flexColumn}>
            <Grid item xs={12}>
              <Typography variant="overline" color={grey[700]}>
                {metric.title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={textColor} variant="h3">
                {current}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{ display: "flex", justifyContent: "end", alignItems: "start" }}
          >
            <MetricBadge metrickey={metric.key} />
          </Grid>
        </Grid>
        {isTrendChange ? (
          <MetricTrend
            trend={trend}
            trendMeasurement={trendMeasurement}
            textColor={textColor}
          />
        ) : (
          <>--</>
        )}
      </CardContent>
    </Card>
  );
};

export default MetricCard;
