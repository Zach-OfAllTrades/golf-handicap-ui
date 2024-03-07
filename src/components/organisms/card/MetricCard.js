import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const METRIC_CARD_STYLE = {
  main: {
    card: {
      background: "linear-gradient(to right bottom, #cfe1b9, #718355)",
    },
    textColor: { color: "white" },
  },
  secondary: {},
};

const SHARED_STYLE = {
  card: {
    minWidth: 250,
    maxWidth: 250,
    height: 275,
    margin: 1,
  },
};

const MAIN_METRIC_KEY = "handicap";

const MetricCard = ({ metric, trendMeasurement }) => {
  const cardStyle =
    metric.key === MAIN_METRIC_KEY
      ? METRIC_CARD_STYLE.main
      : METRIC_CARD_STYLE.secondary;
  const trendDesc = `vs last ${trendMeasurement}`;
  const showTrend = metric.value.trend !== undefined;
  return (
    <Card sx={[cardStyle?.card, SHARED_STYLE.card]}>
      <CardHeader subheader={metric.title}></CardHeader>
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Typography sx={cardStyle?.textColor} variant="h1" alignSelf="center">
          {metric.value.current}
        </Typography>
        {showTrend && (
          <>
            <Typography
              sx={cardStyle?.textColor}
              variant="subtitle1"
              alignSelf="center"
            >
              {metric.value.trend}
            </Typography>
            <Typography
              sx={cardStyle?.textColor}
              variant="subtitle1"
              alignSelf="center"
              marginTop={1}
            >
              {trendDesc}
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default MetricCard;
