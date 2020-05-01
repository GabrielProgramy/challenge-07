const formatDate = (date: Date): string => {
  const parsedDate = new Date(date);
  return Intl.DateTimeFormat().format(parsedDate);
};
export default formatDate;
