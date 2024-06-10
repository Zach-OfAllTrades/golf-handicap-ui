import { TrendingDown, TrendingFlat, TrendingUp } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { MAIN_METRIC_KEY } from "../../../utils/general";
import { METRIC_CARD_STYLE, SHARED_STYLE } from "./MetricCard.style";


const MetricCard = ({ metric, trendMeasurement }) => {
  const cardStyle =
    metric.key === MAIN_METRIC_KEY
      ? METRIC_CARD_STYLE.main
      : METRIC_CARD_STYLE.secondary;
  const trendDesc = `vs last ${trendMeasurement}`;
  const showTrend = metric.value.trend !== undefined;
  const getTrendIcon = (trend) => {
    if (trend > 0) {
      return <TrendingUp />;
    } else if (trend < 0) {
      return <TrendingDown />;
    } else {
      return <TrendingFlat />;
    }
  };
  return (
    <Card sx={[cardStyle?.card, SHARED_STYLE.card]}>
      <CardHeader subheader={metric.title}></CardHeader>
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Typography sx={cardStyle?.textColor} variant="h2" alignSelf="center">
          {metric.value.current}
        </Typography>
        {showTrend && (
          <>
          <Grid></Grid>
            <Typography
              sx={cardStyle?.textColor}
              variant="subtitle1"
              alignSelf="center"
            >
              {metric.value.trend}
            </Typography>
            {/* <Box sx={{ borderRadius: "50%", backgroundColor: "white" }}>
              {getTrendIcon(metric.value.trend)}
            </Box> */}
            <Typography
              sx={cardStyle?.textColor}
              variant="subtitle2"
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
