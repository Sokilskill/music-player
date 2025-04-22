const formatduration = (time) => {
  if (time < 10) {
    return `0${time}`;
  } else {
    return time;
  }
};
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const toMinAndSec = (duration) => {
  const minutes = formatTime(Math.floor(duration / 60));
  const seconds = formatduration(Math.floor(duration - minutes * 60));

  return `${minutes}:${seconds}`;
};

export const shuffle = (array) => array.sort(() => Math.random() - 0.5);
