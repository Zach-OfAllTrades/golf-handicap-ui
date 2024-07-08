import { LineChart } from "@mui/x-charts";
import dayjs from "dayjs";
import { useFetch } from "../../../hooks/useFetch";
import { COLORS, FETCH_KEYS } from "../../../utils/general";
import { convertToJsDate } from "../../../utils/dateFormatter";

const ScoreChart = () => {
  const { data, isLoading, isError } = useFetch(FETCH_KEYS.ROUNDS);
  if (isLoading || !data) {
    return <></>; // TODO: Add loading skeleton
  }
  const roundsWithFormattedDate = data.map((round) => ({
    score: round.score,
    ags: round.ags,
    date: convertToJsDate(round.date),
  }));
  const dates = data.map((round) => convertToJsDate(round.date));
  const scores = data.map((round) => round.score);
  const minScore = Math.min(...scores);
  const maxScore = Math.max(...scores);
  const today = new Date();
  const yearAgo = dayjs(today).subtract(1, "year");
  console.log(dates);

  return (
    <LineChart
      dataset={roundsWithFormattedDate}
      xAxis={[
        {
          dataKey: "date",
          valueFormatter: (value) => dayjs(value).format("M/D"),
          scaleType: "time",
          min: yearAgo,
        },
      ]}
      series={[
        {
          dataKey: "ags",
          label: "AGS",
          showMark: false,
          area: true,
          color: COLORS.dust
        },
        {
          dataKey: "score",
          label: "Score",
          showMark: true,
          color: COLORS.forest,
        },
      ]}
      yAxis={[
        {
          min: minScore - 5,
          max: maxScore + 5,
        },
      ]}
      height={300}
      grid={{ vertical: true, horizontal: true }}
    />
  );
};

export default ScoreChart;
