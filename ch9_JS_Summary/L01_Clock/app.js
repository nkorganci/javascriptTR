setInterval(setClock, 1000);

function setClock() {
    const currentDate=new Date();
    const secondsRatio= currentDate.getSeconds()/60;
    const minuteRatio= (secondsRatio+ currentDate).getMinutes()/60;
    const hourRatio= currentDate.getHours()/60;
}
