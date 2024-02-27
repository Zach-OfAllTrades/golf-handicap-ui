import { Divider, Grid, Typography } from "@mui/material";
import React from "react";

const MetricDetail = ({metric, caption}) => {
  return (
    <Grid item xs={3}>
      <Typography variant="h16">{metric}</Typography>
      <Divider light />
      <Typography variant="caption">{caption}</Typography>
    </Grid>
  );
};

export default MetricDetail;
