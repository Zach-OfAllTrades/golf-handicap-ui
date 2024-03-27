import { getColorPallete } from "../../../temp_redux/reduxMock";

export const ALIGN_CENTER = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const ME_STYLE = {
  card: {
    height: 450,
    width: 300,
    margin: 1,
    marginRight: 7.5,
    display: "flex",
    flexDirection: "column",
  },
  header: {
    background: getColorPallete().gradient,
    height: 100,
    ...ALIGN_CENTER,
  },
  avatar: {
    bgcolor: "#e9ecef",
    color: "black",
    height: 150,
    width: 150,
    marginY: 5,
  },
  content: {
    marginTop: 10,
    ...ALIGN_CENTER,
  },
  actions: {
    marginTop: "auto",
    ...ALIGN_CENTER,
  },
};
