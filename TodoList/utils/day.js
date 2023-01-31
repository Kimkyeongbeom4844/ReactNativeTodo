import dayjs from "dayjs";

const dayList = {
  0: "SUN",
  1: "MON",
  2: "TUE",
  3: "WED",
  4: "THU",
  5: "FRI",
  6: "SAT",
};

const monthList = {
  0: "JAN",
  1: "FEB",
  2: "MAR",
  3: "APR",
  4: "MAY",
  5: "JUN",
  6: "JUL",
  7: "AUG",
  8: "SEP",
  9: "OCT",
  10: "NOV",
  11: "DEC",
};

export const listDay = () => {
  const today = dayjs();
  return `${dayList[today.get("day")]} ${today.get("date")} ${
    monthList[today.get("month")]
  }`;
};
