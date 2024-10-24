import Toast from "./Toast";
import "./toastContainer.css";
const ToastsContainer = ({ toasts, position = "top-right" }) => {
  return (
    <div className={`toasts-container ${position} `}>
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} className="" />
      ))}
    </div>
  );
};

export default ToastsContainer;
