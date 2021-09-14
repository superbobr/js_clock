let hour = document.querySelector('.hour'),
    minute = document.querySelector('.minute'),
    second = document.querySelector('.second'),
    time = document.querySelector('.time');

let button = document.querySelector('.dark_light');
let body = document.body;

setInterval(clock, 1000);
setInterval(showTime, 1000);

function clock() {
    let date = new Date(),
        hours = (date.getHours() * 30) + (date.getMinutes() / 2),
        minutes = date.getMinutes() * 6,
        seconds = date.getSeconds() * 6;
    hour.style.transform = `rotate(${hours}deg)`;
    minute.style.transform = `rotate(${minutes}deg)`;
    second.style.transform = `rotate(${seconds}deg)`;
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function showTime() {
  let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  let days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
  let today = new Date(),
    day = today.getDate(),
    week = days[today.getDay()],
    month = months[today.getMonth()],
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
      
  time.innerHTML = `${week}<br>${day}&nbsp;${month}<br>${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`;
}

button.addEventListener('click', function() {
    body.classList.toggle('night');
    if (body.classList.contains('night')) {
        button.textContent = 'Светлая тема';
        time.style.color = '#FFF';
    } else {
        button.textContent = 'Темная тема';
        time.style.color = '#000';
    }
});

