import { getFetch, postFetch } from "./FetchService";

export const saveRounds = async (args) => {
  const { score, userId, teeId, ags, date } = args;
  const url = `${process.env.REACT_APP_API_URL}/rounds`;
  const body = JSON.stringify({
    score,
    userId,
    teeId,
    ags,
    date,
  });
  return await postFetch(url, body);
};

export const getValidRounds = async (userId, startDate, endDate) => {
  const url = `${process.env.REACT_APP_API_URL}/rounds/valid/${userId}`;
  const body = JSON.stringify({
    to: endDate,
    from: startDate,
  });
  return await postFetch(url, body);
};

export const getRounds = async (userId) => {
  return await getFetch(`${process.env.REACT_APP_API_URL}/rounds/${userId}`);
};
