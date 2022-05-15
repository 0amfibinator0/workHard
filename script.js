const select = document.getElementById('cars');
const info = document.getElementById('info');

let fisrtcommit;
let secondcommit;

async function getData() {
	const commits = await fetch('https://bfs01.getcourse.ru/public/files/12250/88/84120897322424565eb4cddeea2b910a.json?e=1652648399&s=Z7u0ZeUAF00tolbNlIPwBQ')
        .then((response) => {
            return response.json();
        })
		.catch(error => {
			alert('ошибочка вышла');
		});


	fisrtcommit = commits.cars[0];
	secondcommit = commits.cars[1];

	console.log(commits.cars[0]);
	console.log(commits.cars[0].brand);
	console.log(commits.cars[1]);
	console.log(commits.cars[1].model);

	select.addEventListener('change', () => {
		if (select.selectedIndex === 1) {
			console.log(1);
			fisrtcommit.forEach((el) => {
				info.innerHTML += "<p>" + el + "</p>";
			});
		} else if (select.selectedIndex === 2) {
			console.log(2);
			secondcommit.forEach((el) => {
				info.innerHTML += "<p>" + el + "</p>";
			});
		}
	});
}

getData();

