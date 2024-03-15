import { TrendingDown, TrendingFlat, TrendingUp } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { COLORS, PALLETE } from "../../../utils/general";

const METRIC_CARD_STYLE = {
  main: {
    card: {
      background: PALLETE.light.gradient,
    },
    textColor: { color: COLORS.white },
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

const TREND_ICONS = {
  FLAT: <TrendingFlat />,
  UP: <TrendingUp />,
  DOWN: <TrendingDown />,
};

const MAIN_METRIC_KEY = "handicap";

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
        <Typography sx={cardStyle?.textColor} variant="h1" alignSelf="center">
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
