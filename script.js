const select = document.getElementById('cars');
const body = document.querySelector('body');
const div = document.createElement('div');

const customizationDiv = () => {
	div.classList.add('info');
	body.append(div);
};

async function getData() {
	const respons = await fetch('https://bfs01.getcourse.ru/public/files/12250/88/84120897322424565eb4cddeea2b910a.json?e=1652828399&s=uN-d2TZke4PtHhUMIsoRYQ')
        .then((response) => {
            return response.json();
        })
		.catch(error => {
			alert('ошибочка вышла');
		});

	respons.cars.forEach((el) => {
		const option = document.createElement('option');
		option.textContent = el.brand;
		option.value = el.brand;
		select.append(option);
	});
	
	
	select.addEventListener('change', ({target}) => {
		div.textContent = '';
		const car = respons.cars.find((el) => el.brand === target.value);
		for (let key in car) {
			div.innerHTML += '<p>' + key + ': ' + car[key] + '</p>';
		}
	});
}

customizationDiv();
getData();