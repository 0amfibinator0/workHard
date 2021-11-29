
const text = document.getElementById('text');
let arr = ['20', '60', '42', '78', '31', '45', '58'];

arr.forEach((el) => {
    if (el.startsWith('2') || el.startsWith('4')) {
        console.log(el);
    }
});

for (let x = 1; x <101; x++) {
    let y = 0;
    for (let i = 1; i <= x; i++) {
        if (x % i == 0) {
            y++;
        }
    }
    if (y <= 2) {
        const div = document.createElement("div");
        div.textContent = `${x} 1;${x}`;
        document.body.append(div);
    }
}