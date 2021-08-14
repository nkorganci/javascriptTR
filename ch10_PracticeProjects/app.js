// setInterval(setClock, 1000);
function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  console.log(secondsRatio);

  const minutesRatio = currentDate.getMinutes() / 60;
  console.log(minutesRatio);

  const hoursRatio = currentDate.getHours() / 60;
  console.log(hoursRatio);
}
setClock();
