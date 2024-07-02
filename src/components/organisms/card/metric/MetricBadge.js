import React from "react";
import { METIRC_KEYS } from "../../../../utils/general";
import Badge from "../../../atoms/badge/Badge";
import {
  AirlineStops,
  EmojiEvents,
  GolfCourse,
  SportsGolf,
  SwapVert,
} from "@mui/icons-material";

const MetricBadge = ({ metrickey }) => {
  const { SCORE, SOP, DIFF, HANDI, LOW } = METIRC_KEYS;
  const METRIC_ICONS = {
    [SCORE]: <GolfCourse />,
    [HANDI]: <SportsGolf />,
    [SOP]: <AirlineStops />,
    [DIFF]: <SwapVert />,
    [LOW]: <EmojiEvents />,
  };

  return <Badge>{METRIC_ICONS[metrickey]}</Badge>;
};

export default MetricBadge;
