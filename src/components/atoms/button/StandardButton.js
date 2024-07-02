import { Button, styled } from "@mui/material";
import React from "react";
import { getColorPallete } from "../../../temp_redux/reduxMock";

const currentPallete = getColorPallete();

export const BUTTON_VARIANTS = {
  primary: "primary",
  secondary: "secondary",
};

const BUTTON_STYLE = {
  [BUTTON_VARIANTS.primary]: {
    bgColor: currentPallete.button.main,
    colorOf: currentPallete.button.contrast,
    bdrColor: currentPallete.button.main,
  },
  [BUTTON_VARIANTS.secondary]: {
    bgColor: currentPallete.button.contrast,
    colorOf: currentPallete.button.main,
    bdrColor: currentPallete.button.main,
  },
};

const StandardButton = ({ children, variant = "primary", handleClick }) => {
  const { bgColor, colorOf, bdrColor } = BUTTON_STYLE[variant];
  const StyledButton = styled(Button)({
    border: "1px solid",
    backgroundColor: bgColor,
    color: colorOf,
    borderColor: bdrColor,
    "&:hover": {
      opacity: "70%",
      backgroundColor: bgColor,
      color: colorOf,
      borderColor: bdrColor,
    },
  });

  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
};

export default StandardButton;
