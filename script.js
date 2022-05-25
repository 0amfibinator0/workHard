const firstSelect = document.getElementById('first-select');
const firstInput = document.getElementById('first-input');
const secondSelect = document.getElementById('second-select');
const myHeaders = new Headers();
myHeaders.append("apikey", "GYJCAGYC5yRCTxujemFX8Qg7pedYZlUo");

let secondInput = document.getElementById('second-input');
let from = 'USD';
let to = 'RUB';
let amount = 1;

async function getData () {
    return await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    })
    .then(response => response.json())
    .then(result => secondInput.value = result.result)
    .catch(error => console.log('error', error));
}
firstInput.addEventListener('input', () => {
    amount = firstInput.value;
    from = firstSelect.value;
    to = secondSelect.value;
    getData();
});
firstSelect.addEventListener('change', ({target}) => {
    from = target.value;
    to = secondSelect.value;
    getData();
});
secondSelect.addEventListener('change', ({target}) => {
    from = firstSelect.value;
    to = target.value;
    getData();
});

getData();