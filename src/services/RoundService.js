const ROUNDS_DATA_URL = "http://localhost:5000/rounds";

export const saveRounds = async (args) => {
  const { score, userId, teeId, ags, date } = args;
  return await fetch(`${ROUNDS_DATA_URL}`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      score,
      userId,
      teeId,
      ags,
      date,
    }),
  }).then((response) => response.json());
};

export const getValidRounds = async (userId, startDate, endDate) => {
  return await fetch(`${ROUNDS_DATA_URL}/valid/${userId}`, {
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

export const getRounds = async (userId) => {
  return await fetch(`${ROUNDS_DATA_URL}/${userId}`, {
    mode: "cors",
  }).then((response) => response.json());
};
