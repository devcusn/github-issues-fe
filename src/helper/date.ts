export const timeAgoFormat = (dateStr: string) => {
  const givenDate = new Date(dateStr);
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - givenDate.getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  if (weeks > 4) {
    return `on  ${givenDate.toLocaleString("default", {
      month: "short",
      day: "2-digit",
    })}`;
  } else if (weeks > 1) {
    return `${weeks} weeks ago`;
  } else if (weeks === 1) {
    return "1 week ago";
  } else if (days > 30) {
    return givenDate;
  } else if (days > 0) {
    return `${days} days ago`;
  } else if (hours > 0) {
    return `${hours} hours ago`;
  } else if (minutes > 0) {
    return `${minutes} minutes ago`;
  } else {
    return "Less than 1 minute ago";
  }
};
