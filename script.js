let input = document.getElementById('input');
let text = document.getElementById('par');
let save;
let timeout;

const enteringText = () => {
    save = input.value;

    if (timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
        text.innerHTML = save;
    }, 300);
};

input.addEventListener('input', enteringText);

