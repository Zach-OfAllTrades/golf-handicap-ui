const COURSE_DATA_URL = "http://localhost:5000/courses";

export const getCourses = async () => {
  return await fetch(`${COURSE_DATA_URL}`).then((response) => response.json());
};
