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







// firstSelect.addEventListener('change', ({target}) => {
// from = target.value;
// });
// secondSelect.addEventListener('change', ({target}) => {
//     to = target.value;
// });

// const select = document.getElementById('cars');
// const body = document.querySelector('body');
// const div = document.createElement('div');

// const customizationDiv = () => {
// 	div.classList.add('info');
// 	body.append(div);
// };

// async function getData() {
// 	const respons = await fetch('https://bfs01.getcourse.ru/public/files/12250/88/84120897322424565eb4cddeea2b910a.json?e=1652828399&s=uN-d2TZke4PtHhUMIsoRYQ')
//         .then((response) => {
//             return response.json();
//         })
// 		.catch(error => {
// 			alert('ошибочка вышла');
// 		});

// 	respons.cars.forEach((el) => {
// 		const option = document.createElement('option');
// 		option.textContent = el.brand;
// 		option.value = el.brand;
// 		select.append(option);
// 	});
	
	
// 	select.addEventListener('change', ({target}) => {
// 		div.textContent = '';
// 		const car = respons.cars.find((el) => el.brand === target.value);
// 		for (let key in car) {
// 			div.innerHTML += '<p>' + key + ': ' + car[key] + '</p>';
// 		}
// 	});
// }

// customizationDiv();
// getData();