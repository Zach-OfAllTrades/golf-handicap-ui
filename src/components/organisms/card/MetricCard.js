import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
 // TODO: Remove inline styling
const MetricCard = ({metric, title}) => {
  return (
    <Card>
      <CardHeader></CardHeader>
      <CardContent sx={{display: "flex", flexDirection:"column"}}>
          <Typography variant="h1" alignSelf="center">{metric}</Typography>
          <Divider light />
          <Typography variant="subtitle1" alignSelf="center" marginTop={1}>{title}</Typography>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
