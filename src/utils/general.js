export const STANDARD_DATE_FORMAT = "YYYY-MM-DDTHH:mm:ssZ";

export const FETCH_KEYS = {
  ROUNDS: "rounds",
  HANDICAP: "handicap",
  COURSES: "courses",
  METRICS: "metrics",
};

export const METIRC_KEYS = {
  SCORE: "avg_score",
  SOP: "avg_sop",
  DIFF: "avg_diff",
  HANDI: "handicap",
  LOW: "lowest",
};

export const TREND_MEASURMENTS = [
  { id: "week", label: "Wk" },
  { id: "month", label: "Mo" },
  { id: "year", label: "Yr" },
  { id: "all", label: "All" },
];

export const MAIN_METRIC_KEY = FETCH_KEYS.HANDICAP;

export const DIV_DEBUG = {
  border: "1px solid red",
};

export const BUTTON_COLORS = {
  MAIN: "#588157",
  WHITE: "#FFF",
};

export const COLORS = {
  melon: "#cfe1b9",
  lime: "#718355",
  forest: "#588157",
  white: "#FFF",
  black: "#000",
};

export const PALLETE = {
  light: {
    gradient: `linear-gradient(to right bottom, ${COLORS.melon}, ${COLORS.lime})`,
    button: {
      main: COLORS.forest,
      contrast: COLORS.white,
    },
  },
  dark: {},
};

export const MOCK_SCORECARD = {
  teeId: "593cf79c-237f-42ff-99e9-b3d1d9da5768",
  holes: [
    {
      number: 1,
      handicap: 3,
      par: 4,
      yardage: 414,
    },
    {
      number: 2,
      handicap: 7,
      par: 3,
      yardage: 178,
    },
    {
      number: 3,
      handicap: 13,
      par: 4,
      yardage: 319,
    },
    {
      number: 4,
      handicap: 9,
      par: 3,
      yardage: 165,
    },
    {
      number: 5,
      handicap: 5,
      par: 5,
      yardage: 523,
    },
    {
      number: 6,
      handicap: 15,
      par: 4,
      yardage: 279,
    },
    {
      number: 7,
      handicap: 1,
      par: 4,
      yardage: 403,
    },
    {
      number: 8,
      handicap: 11,
      par: 5,
      yardage: 501,
    },
    {
      number: 9,
      handicap: 17,
      par: 4,
      yardage: 312,
    },
    {
      number: 10,
      handicap: 10,
      par: 3,
      yardage: 187,
    },
    {
      number: 11,
      handicap: 4,
      par: 5,
      yardage: 553,
    },
    {
      number: 12,
      handicap: 8,
      par: 4,
      yardage: 374,
    },
    {
      number: 13,
      handicap: 2,
      par: 4,
      yardage: 437,
    },
    {
      number: 14,
      handicap: 14,
      par: 5,
      yardage: 506,
    },
    {
      number: 15,
      handicap: 18,
      par: 3,
      yardage: 130,
    },
    {
      number: 16,
      handicap: 16,
      par: 5,
      yardage: 464,
    },
    {
      number: 17,
      handicap: 6,
      par: 3,
      yardage: 214,
    },
    {
      number: 18,
      handicap: 6,
      par: 3,
      yardage: 355,
    },
  ],
};
