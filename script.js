let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let date = new Date();

for (let i = 0; i < week.length; i++) {
    const div = document.createElement("div");
    if (i === 0 || i === 6) {
        div.style.fontStyle = "italic";
    }
    if ( i === date.getDay() ) {
        div.style.fontWeight = "bolder";
    }
    div.textContent = week[i];
    document.body.append(div);
}