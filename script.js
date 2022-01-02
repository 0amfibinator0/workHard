const cityArr = {
    rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
    uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
    bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
    jap: ['Токио', 'Киото', 'Осака', 'Иокогама'] 
};
const body = document.querySelector('body');
const country = document.getElementById('country');
const city = document.getElementById('city');
const div = document.createElement('div');

let contryVal;
let cityVal;

const checkCity = (el) => {
    city.style.display = 'block';

    const lastOpt = document.querySelectorAll('.opt');
    
    lastOpt.forEach((el) => {
        city.remove(el);
    });
    
    el.forEach((val) => {
        let option = document.createElement("option");
        option.classList.add('opt');
        option.value = val;
        option.textContent = val;
        city.appendChild(option);
    });
};

country.addEventListener("change", () => {
    if (country.value === 'rus') {
        checkCity(cityArr.rus);
        contryVal = 'Россия';
    } else if (country.value === 'uk') {
        checkCity(cityArr.uk);
        contryVal = 'Украина';
    } else if (country.value === 'bel') {
        checkCity(cityArr.bel);
        contryVal = 'Беларусь';
    } else if (country.value === 'jap') {
        checkCity(cityArr.jap);
        contryVal = 'Япония';
    }
});

city.addEventListener("change", () => {
    cityVal = city.value;

    div.textContent = contryVal;
    
    div.textContent = contryVal + ' ' + cityVal;
    body.append(div);
});