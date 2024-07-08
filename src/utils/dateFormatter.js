import dayjs from "dayjs";

export const convertToJsDate = (date) => {
    return dayjs(date).toDate();
}

