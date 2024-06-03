import { COLORS, PALLETE } from "../../../../utils/general";

export const BORDER = {
  main: {
    border: "1px solid red",
  },
};

export const METRIC_CARD_STYLE = {
  main: {
    card: {
      background: PALLETE.light.gradient,
    },
    textColor: { color: COLORS.white },
  },
  secondary: {},
};

export const SHARED_STYLE = {
  card: {
    minWidth: 250,
    maxWidth: 250,
    height: 150,
    margin: 1,
  },
  flexRow: { display: "flex", flexDirection: "row" },
  flexColumn: { display: "flex", flexDirection: "column" },
};
