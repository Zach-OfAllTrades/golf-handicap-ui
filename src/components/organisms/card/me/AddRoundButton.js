import { AddCircleOutline } from "@mui/icons-material";
import { Button, styled, Grid } from "@mui/material";
import React from "react";
import { BUTTON_COLORS } from "../../../../utils/general";

const AddRoundButton = ({ handleClick }) => {
  const StyledButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    lineHeight: 1.5,
    backgroundColor: BUTTON_COLORS.WHITE,
    color: BUTTON_COLORS.MAIN,
    "&:hover": {
      opacity: "70%",
      backgroundColor: BUTTON_COLORS.WHITE,
      color: BUTTON_COLORS.MAIN,
      boxShadow: "none",
    },
    "&:focus": {
      boxShadow: "none",
    },
  });

  return (
    <StyledButton onClick={handleClick} startIcon={<AddCircleOutline />}>
      Add A Round
    </StyledButton>
  );
};

export default AddRoundButton;
