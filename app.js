const timerDay = document.querySelector(".day")
const timerHour = document.querySelector(".hour")
const timerMinute = document.querySelector(".minute")
const timerSecond = document.querySelector(".second")
const dateTimeInput = document.querySelector("#dateTime")


const countdown = () => {

    const countDate = new Date(dateTimeInput.value)
 

    const now = new Date().getTime();

    const gap = countDate - now;
 
    // time calculations //
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // calculate the remaining time .. //
     
    const textDay = Math.floor(gap / day);
    
    const textHour = Math.floor((gap % day) / hour);

    const textMinute = Math.floor((gap % hour) / minute);

    const textSecond = Math.floor((gap % minute) / second);



    
timerDay.innerText = textDay
timerHour.innerText = textHour
timerMinute.innerText = textMinute
timerSecond.innerText = textSecond
 
};



setInterval(countdown, 1000);

