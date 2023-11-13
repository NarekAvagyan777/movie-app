export const convertSeconds = (secondInString) => {

  const seconds = +secondInString;
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
//   const remainingSeconds = seconds % 60;

  const hourString = `${hours}h`;
  const minuteString = `${minutes}m`;
//   const secondString = `${remainingSeconds}s`;

  if (hours > 0) {
    return `${hourString} ${minuteString || "0"}`;
  } else if (!hours && minutes > 0) {
    return `${minuteString}`;
  }

  return
};
