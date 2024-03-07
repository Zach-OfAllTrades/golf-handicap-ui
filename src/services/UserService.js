import { getFetch } from "./FetchService";

export const getUser = async (userId) => {
  return await getFetch(`${process.env.REACT_APP_API_URL}/users/${userId}`);
};
