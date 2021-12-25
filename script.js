const div = document.createElement("div");
const dove = document.createElement("div");

setInterval(function(){
    let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let monthes = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    let date = new Date();
    let day = date.getUTCDay();
    let month = date.getMonth();
    let hour;

    if (date.getHours() >= 2 && date.getHours() <= 4) {
        hour = "часа";
    } else if (date.getHours() >= 5 && date.getHours() <= 20) {
        hour = "часов";
    }else if (date.getHours() >= 22 && date.getHours() <= 24) {
        hour = "часа";
    } else {
        hour = "час";
    }

    div.textContent = `Сегодня ${week[day]}, ${date.getDate()} ${monthes[month]} ${date.getFullYear()} года, ${date.getHours()} ${hour} ${date.getMinutes()} минут ${date.getSeconds()} секунды`;
},1000);
setInterval(function() {
    const date = new Date();

    dove.textContent = `${new Intl.DateTimeFormat().format(date)} - ${date.toLocaleTimeString()}`;
},1000);

document.body.append(div);
document.body.append(dove);