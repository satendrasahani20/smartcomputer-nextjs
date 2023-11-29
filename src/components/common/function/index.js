import moment from "moment";

export const dateFormate = (dates) => {
  return moment(dates).format("D MMM YYYY");
};
export const calculatePercentage = (part, whole) => {
  return (part / whole) * 100;
};
export const removeEmptyElement = (arr) => {
  return arr.filter((itm) => itm && itm);
};
