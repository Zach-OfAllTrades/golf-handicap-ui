import React from "react";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";

const Badge = ({ content }) => {
  return (
    <Box
      sx={{
        backgroundColor: grey[300],
        height: 50,
        width: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
      }}
    >
      {content}
    </Box>
  );
};

export default Badge;
