const div = document.createElement("div");
const dove = document.createElement("div");

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let monthes = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня',
'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

setInterval(function(){
    let date = new Date();
    let day = date.getUTCDay() - 1;
    let month = date.getMonth();
    let hour;
    let minutes;
    let seconds;

    if (day < 0) {
        day = 6;
    }

    if (date.getHours() >= 2 && date.getHours() <= 4) {
        hour = "часа";
    } else if (date.getHours() >= 5 && date.getHours() <= 20) {
        hour = "часов";
    }else if (date.getHours() >= 22 && date.getHours() <= 24) {
        hour = "часа";
    } else {
        hour = "час";
    }

    if (date.getSeconds() % 10 >= 2 && date.getSeconds() % 10 <= 4) {
        seconds = "секунды";
    } else if (date.getSeconds() % 10 >= 5 || date.getSeconds() % 10 === 0) {
        seconds = "секунд";
    } else {
        seconds = "секунда";
    }

    if (date.getMinutes() % 10 >= 2 && date.getMinutes() % 10 <= 4) {
        minutes = "минуты";
    } else if (date.getMinutes() % 10 >= 5 || date.getMinutes() <= 20 || date.getMinutes() % 10 === 0) {
        minutes = "минут";
    } else {
        minutes = "минута";
    }

    div.textContent = `Сегодня ${week[day]},
    ${date.getDate()} ${monthes[month]} ${date.getFullYear()} года,
    ${date.getHours()} ${hour} ${date.getMinutes()} ${minutes} ${date.getSeconds()} ${seconds}`;
},1000);
setInterval(function() {
    const date = new Date();

    dove.textContent = `${new Intl.DateTimeFormat().format(date)} - ${date.toLocaleTimeString()}`;
},1000);

document.body.append(div);
document.body.append(dove);