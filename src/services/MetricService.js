import { getUserInfo } from "../temp_redux/reduxMock";

export const getUserMetrics = async (userId) => {
  const { metrics } = getUserInfo();
  return await fetch(`http://localhost:5000/metrics`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      metricKeys: metrics,
    }),
  }).then((response) => response.json());
};

export const getHandicap = async (userId) => {
  return await fetch(`http://localhost:5000/metric/handicap/${userId}`, {
    mode: "cors",
  }).then((response) => response.json());
};