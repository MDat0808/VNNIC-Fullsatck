import { createContext, useReducer } from "react";
import { toastReducer } from "./ToastReduce";
import ToastsContainer from "./ToastsContainer";
export const ToastContext = createContext();

export const ToastContextProvider = ({ children }) => {
  const initialState = {
    toasts: [],
  };
  const [state, dispatch] = useReducer(toastReducer, initialState);
  const addToast = (type, message) => {
    const id = Math.floor(Math.random() * 10000000);
    dispatch({ type: "ADD_TOAST", payload: { message, type, id } });
  };

  const remove = (id) => {
    dispatch({ type: "DELETE_TOAST", payload: id });
  };

  const success = (message) => {
    addToast("success", message);
  };

  const warning = (message) => {
    addToast("warning", message);
  };

  const info = (message) => {
    addToast("info", message);
  };

  const error = (message) => {
    addToast("error", message);
  };
  const value = { success, warning, info, error, remove };
  console.log(state);

  return (
    <ToastContext.Provider value={value}>
      <ToastsContainer toasts={state.toasts} />
      {children}
    </ToastContext.Provider>
  );
};
