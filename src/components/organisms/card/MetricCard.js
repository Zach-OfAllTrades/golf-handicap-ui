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

const MetricCard = ({ main, metric, title, trend }) => {
  const cardStyle = main ? METRIC_CARD_STYLE.main : METRIC_CARD_STYLE.secondary;
  return (
    <Card sx={[cardStyle?.card, SHARED_STYLE.card]}>
      <CardHeader subheader={title}></CardHeader>
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Typography sx={cardStyle?.textColor} variant="h1" alignSelf="center">
          {metric}
        </Typography>
        {/* <Divider light /> */}
        {trend && (
          <>
            <Typography
              sx={cardStyle?.textColor}
              variant="subtitle1"
              alignSelf="center"
            >
              {trend.change}
            </Typography>
            <Typography
              sx={cardStyle?.textColor}
              variant="subtitle1"
              alignSelf="center"
              marginTop={1}
            >
              vs last {trend.measurement}
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default MetricCard;
