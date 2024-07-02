import { getColorPallete } from "../../../../temp_redux/reduxMock";
import { COLORS } from "../../../../utils/general";

const currentPallete = getColorPallete();

export const BORDER = {
  main: {
    border: "1px solid red",
  },
};

export const METRIC_CARD_STYLE = {
  main: {
    card: {
      background: currentPallete.gradient,
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
