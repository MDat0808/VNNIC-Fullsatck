const formatDateTimeVi = (dateString) => {
  const date = new Date(dateString);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  const formattedDate = new Intl.DateTimeFormat("vi-VN", options).format(date);
  return formattedDate.replace(",", " -");
};

export default formatDateTimeVi;
