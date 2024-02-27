import { getUserInfo } from "../temp_redux/reduxMock";
import { getFetch, postFetch } from "./FetchService";

export const getUserMetrics = async (userId) => {
  const { metrics } = getUserInfo();
  const url = `${process.env.REACT_APP_API_URL}/metrics`;
  const body = JSON.stringify({
    userId,
    metricKeys: metrics,
  });
  return await postFetch(url, body);
};

export const getHandicap = async (userId) => {
  return await getFetch(`${process.env.REACT_APP_API_URL}/metric/handicap/${userId}`);
};