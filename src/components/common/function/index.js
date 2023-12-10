import moment from "moment";
import { Toaster } from "../toaster/Toaster";

export const dateFormate = (dates) => {
  return moment(dates).format("D MMM YYYY");
};
export const calculatePercentage = (part, whole) => {
  return (part / whole) * 100;
};
export const removeEmptyElement = (arr) => {
  return arr.filter((itm) => itm && itm);
};

export function generateRandom10DigitNumber() {
  const min = 1000000000; // 10^9
  const max = 9999999999; // 10^10 - 1
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const downloadCertificate = async (imageUrl) => {
  try {
    if(!imageUrl){
      Toaster.error("Please Contact to you centre")
      return false
    }
    const response = await fetch(imageUrl);
    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = generateRandom10DigitNumber()+"SMARTCOMPUTER.jpg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } catch (error) {
    console.error('Error downloading image:', error);
  }
};