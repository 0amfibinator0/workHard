const select = document.getElementById('cars');
const info = document.getElementById('info');
const body = document.querySelector('body');
const div = document.createElement('div');

let firstCommit;
let secondCommit;

const customizationDiv = () => {
	div.classList.add('info');
	body.append(div);
};

async function getData() {
	const commits = await fetch('https://bfs01.getcourse.ru/public/files/12250/88/84120897322424565eb4cddeea2b910a.json?e=1652648399&s=Z7u0ZeUAF00tolbNlIPwBQ')
        .then((response) => {
            return response.json();
        })
		.catch(error => {
			alert('ошибочка вышла');
		});

	commits.cars.forEach((el) => {
		const option = document.createElement('option');
		option.textContent = el.brand;
		option.value = el.brand;
		select.append(option);
		if (option.value === 'bmw') {
			firstCommit = el;
		} else if (option.value === 'volvo') {
			secondCommit = el;
		}
	});

	select.addEventListener('change', () => {
		if (select.options[select.selectedIndex].value === firstCommit.brand) {
			div.textContent = '';
			for (let key in firstCommit) {
				div.innerHTML += '<p>' + key + ': ' + firstCommit[key] + '</p>';
			}
		} else if (select.options[select.selectedIndex].value === secondCommit.brand) {
			div.textContent = '';
			for (let key in secondCommit) {
				div.innerHTML += '<p>' + key + ': ' + secondCommit[key] + '</p>';
			}
		}
	});
}

customizationDiv();
getData();