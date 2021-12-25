let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let date = new Date();
let day = date.getUTCDay() - 1;

if (day < 0) {
    day = 6;
}

for (let i = 0; i < week.length; i++) {
    const div = document.createElement("div");
    if (i === 5 || i === 6) {
        div.style.fontStyle = "italic";
    }
    if ( i === day ) {
        div.style.fontWeight = "bolder";
    }
    div.textContent = week[i];
    document.body.append(div);
}