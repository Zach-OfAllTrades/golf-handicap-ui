import { getFetch, postFetch } from "./FetchService";
import { getUser } from "./UserService";

export const getUserMetrics = async (userId) => {
  const { userMetrics } = await getUser(userId);
  console.log("userMetrics", userMetrics);
  const metrics = userMetrics.map((userMetric) => userMetric.metric.key);
  console.log("metrics", metrics);
  const url = `${process.env.REACT_APP_API_URL}/metrics`;
  const body = JSON.stringify({
    userId,
    metricKeys: metrics,
  });
  return await postFetch(url, body);
};

export const getHandicap = async (userId) => {
  return await getFetch(
    `${process.env.REACT_APP_API_URL}/metric/handicap/${userId}`
  );
};

export const getMetricsByUser = async (userId) => {
  return await getFetch(`${process.env.REACT_APP_API_URL}/metrics/${userId}`);
};
