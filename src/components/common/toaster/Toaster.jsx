import { toast } from "react-toastify";

export const Toaster = {
  error: (message,options = {}) => {
    toast.error(message,{className: "custom-toast", style:{width:options?.width?options?.width:"auto"}});
    toast.clearWaitingQueue();
  },
  success: (message) => {
    toast.success(message);
    toast.clearWaitingQueue();
  },
  info: (message) => {
    toast.info(message);
    toast.clearWaitingQueue();
  }
};
