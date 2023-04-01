export const formatTime = (time) => {
  const getSeconds = `0${time % 60}`.slice(-2);
  const minutes = `${Math.floor(time / 60)}`;
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};

//   if(start)
//   setTime((prev) => (prev += 1));
//   // if (minutes < 59 && seconds === 59) {
//   //   setMinutes(minutes + 1);
//   //   setSeconds(0);
//   // }
//   // if (minutes === 59) {
//   //   setHours(hours + 1);
//   //   setMinutes(0);
//   //   setSeconds(0);
// }
