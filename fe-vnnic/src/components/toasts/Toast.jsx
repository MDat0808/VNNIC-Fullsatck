import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faTriangleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useToast } from "../../hook/useToast";

import "./toast.css";
export default function Toast({ message, type, id }) {
  const toast = useToast();
  const handleDismiss = () => {
    toast.remove(id);
  };
  const [currentTime, setCurrentTime] = useState("");

  const timerID = useRef(null);
  const progressRef = useRef(null);
  const handleMouseEnter = () => {
    clearTimeout(timerID.current);
    progressRef.current.style.animationPlayState = "paused";
  };

  const handleMouseLeave = () => {
    const remainingTime =
      (progressRef.current.offsetWidth /
        progressRef.current.parentElement.offsetWidth) *
      4000;

    progressRef.current.style.animationPlayState = "running";

    timerID.current = setTimeout(() => {
      handleDismiss();
    }, remainingTime);
  };

  useEffect(() => {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setCurrentTime(timeString);
    timerID.current = setTimeout(() => {
      handleDismiss();
    }, 4000);

    return () => {
      clearTimeout(timerID.current);
    };
  }, []);

  const toastTypes = {
    success: {
      icon: <FontAwesomeIcon icon={faCircleCheck} />,
      iconClass: "text-green-500",
      progressBarClass: "success",
    },
    warning: {
      icon: <FontAwesomeIcon icon={faTriangleExclamation} />,
      iconClass: "text-yellow-500",
      progressBarClass: "warning",
    },
    error: {
      icon: <FontAwesomeIcon icon={faCircleXmark} />,
      iconClass: "text-red-500",
      progressBarClass: "error",
    },
    info: {
      icon: "",
      iconClass: "",
      progressBarClass: "info",
    },
  };

  const { icon, iconClass, progressBarClass } =
    toastTypes[type] || toastTypes.info;

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`bg-toast toast flex w-full max-w-xs items-center rounded-lg px-6 py-4 text-white shadow ${
        id ? "" : "toast-exit"
      } `}
      role="alert"
    >
      <div className="flex w-full flex-row items-start gap-4">
        <div className={iconClass}>{icon}</div>
        <div className="flex flex-col gap-1">
          <div className="text-sm font-medium">{message}</div>
          <div className="text-[10px] text-slate-300">
            Hôm nay {currentTime}
          </div>
        </div>
        <div
          onClick={handleDismiss}
          className="ml-auto text-white hover:cursor-pointer"
        >
          <FontAwesomeIcon className="h-4 w-4" icon={faXmark} />
        </div>
      </div>
      <div ref={progressRef} className="toast-progress">
        <div className={`toast-progress-bar ${progressBarClass}`}></div>
      </div>
    </div>
  );
}
