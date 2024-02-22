import dayjs from "dayjs";
import { HANDICAP_DIFFS } from "../utiles/rules";

const standardizeDate = (date) => dayjs(date).format("YYYY-MM-DD");
const getAverage = (array) => array.reduce((a, b) => a + b) / array.length;

//TODO: Remove calculations and move to backend service layer
export const getUserStats = async (userId) => {
  const {handicap, rounds} = await getUserHandicap(userId);
  const trending = await calculateHandicapTrend(userId, handicap, "month");
  const averageScore = calculateAverageScore(rounds);
  const lowestRound = calculateLowestRound(rounds);

  return {
    lowestRound,
    trending,
    averageScore,
  };
};

export const getUserHandicap = async (userId) => {
  const today = new Date();
  const yearAgo = dayjs(today).subtract(1, "year");
  const roundsArray = await getValidRounds(
    userId,
    standardizeDate(yearAgo),
    standardizeDate(today)
  );
  const handicap = calculateHandicap(roundsArray);

  return {
    handicap,
    rounds: roundsArray,
  };
};

export const getHandicap = async (userId) => {
  return await fetch(`http://localhost:5000/handicap/${userId}`, {
    mode: "cors",
  }).then((response) => response.json());
};

const getValidRounds = async (userId, startDate, endDate) => {
  return await fetch(`http://localhost:5000/rounds/valid/${userId}`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: endDate,
      from: startDate,
    }),
  }).then((response) => response.json());
};

const calculateHandicap = (rounds) => {
  if (rounds.length < 3) return "N/A";
  const { numberOfLowest, adjustment } = HANDICAP_DIFFS[rounds.length];
  const handicappedRounds = rounds.map((round) => {
    const { rating, slope } = round.tee;
    return calculateRoundDiff(round.ags, rating, slope, adjustment);
  });

  const lowestRounds = handicappedRounds
    .sort((a, b) => a - b)
    .slice(0, numberOfLowest);
  //   const diffAverage = lowestRounds.reduce((a, b) => a + b) / numberOfLowest;
  const diffAverage = getAverage(lowestRounds);
  // average of lowest scores (depending on rules) * .96;
  const rawHandicap = diffAverage * 0.96;

  return rawHandicap.toFixed(1);
};

const calculateRoundDiff = (ags, rating, slope, adjustment) => {
  // (AGS - Rating) * 113 / Slope
  const diff = (ags - rating) * 113 / slope;
  return diff.toFixed(2) - adjustment;
};

const calulateSupportMetrics = () => {
  // what support metrics are selected? Later functionality
};

const calculateAverageScore = (rounds) => {
  const scoreDiffs = rounds.map((round) => {
    return round.score - round.tee.par;
  });
  return getAverage(scoreDiffs);
};

const calculateLowestRound = (rounds) => {
  return Math.min(...rounds.map((round) => round.score));
};

const calculateHandicapTrend = async (
  userId,
  currentHandicap,
  trendMeasurement
) => {
  // Monthly trend of users handicap, go back a month & calculate handicap, then compare it to current.
  const endDate = dayjs().subtract(1, trendMeasurement);
  const yearFromEnd = dayjs(endDate).subtract(1, "year");

  const roundsArray = await getValidRounds(userId, yearFromEnd, endDate);
  const oldHandicap = calculateHandicap(roundsArray);
  const trend = currentHandicap - oldHandicap;
  return trend.toFixed(1);
};

// SAFE GAURDS:
// - You submit an exceptional score, which is 7.0 strokes or better than your Handicap Index at the time the round is played, or
// - Your 8 of 20 calculation is 3.0 or more strokes above your Low Handicap Index™ from the previous 365 days.
