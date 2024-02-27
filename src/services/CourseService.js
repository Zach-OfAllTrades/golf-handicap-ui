import { getFetch } from "./FetchService";

export const getCourses = async () => {
  return await getFetch(`${process.env.REACT_APP_API_URL}/courses`);
};
