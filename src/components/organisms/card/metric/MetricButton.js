import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";
import { BUTTON_COLORS, PALLETE } from "../../../../utils/general";

const MetricButton = ({ measurement, currentTrend, setTrend }) => {
  const { id, label } = measurement;
  const isSelected = currentTrend === id;

  return (
    <Box
      key={id}
      sx={{
        backgroundColor: isSelected ? grey[400] : grey[200],
        color: isSelected ? grey[700] : grey[400],
        height: 30,
        width: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 1,
        mx: 0.5,
        "&:hover": {
          cursor: "pointer",
          backgroundColor: grey[400],
          color: grey[700],
        },
      }}
      onClick={() => setTrend(id)}
    >
      {label}
    </Box>
  );
};

export default MetricButton;
