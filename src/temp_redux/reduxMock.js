// const USER_ID = "95532b04-fa19-496f-90dd-dbced6199525";
const USER_ID = "194619b7-eb90-4bfb-ae69-bb55bf1d80b4";

export const getUserInfo = () => {
  return {
    id: USER_ID,
    first_name: "Zachary",
    last_name: "Rose",
    email: "zach.rose.1008@gmail.com",
    profile_pic: "link.com/pic",
    registration_date: "12/12/2023",
    location: "Jacksonville, FL",
    username: "zach.rose",
    password: "dummyP@ssword",
    metrics: [
      "handicap",
      "avg_score",
      "avg_diff",
      "avg_sop",
      "handicap_trend",
      "lowest",
    ],
  };
};

export const getUserId = () => {
  return USER_ID;
};
