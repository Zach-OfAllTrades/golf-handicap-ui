import { TrendingUp, TrendingDown } from "@mui/icons-material";
import { Grid, Box, Typography } from "@mui/material";
import { SHARED_STYLE } from "../MetricCard.style";

const { flexRow } = SHARED_STYLE;

const MetricTrend = ({ trend, trendMeasurement, textColor }) => {
  const isTrendingUp = trend > 0;
  const trendDesc = `${
    isTrendingUp ? "+" : ""
  }${trend} vs last ${trendMeasurement}`;
  const icon = isTrendingUp ? <TrendingUp /> : <TrendingDown />;

  return (
    <Grid container sx={[flexRow, { alignItems: "center" }]}>
      <Typography sx={textColor} variant="subtitle2" mr={0.5}>
        {trendDesc}
      </Typography>
      <Box>{icon}</Box>
    </Grid>
  );
};

export default MetricTrend;
