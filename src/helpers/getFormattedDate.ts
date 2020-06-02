import { months } from 'constants/date';

const getFormattedDate = (dateStr: string) => {
  const date = new Date(dateStr);
  
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

export default getFormattedDate;
