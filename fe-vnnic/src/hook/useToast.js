import { useContext } from "react";
import { ToastContext } from "../components/toasts/ToastContext";

export const useToast = () => useContext(ToastContext);
