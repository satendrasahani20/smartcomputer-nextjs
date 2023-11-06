import moment from "moment";

export const dateFormate=(dates)=>{
   return moment(dates).format('D MMM YYYY');
}