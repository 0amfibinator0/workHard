//                                          №1
let text = document.querySelector('#task1');

text.innerHTML = text.innerHTML.replace(/функ[а-яё]+/gi, `<strong>функция</strong>`);
//                                          №2
let text2 = document.querySelector('#task2');
const regExp = /\d{2}:\d{2}/gi;
const arrayContent = text2.innerHTML.match(regExp);

arrayContent.forEach((item) => {
	const string = item.toString();
	text2.innerHTML = text2.innerHTML.replace(string, `<b>${string}</b>`);
});
//                                          №3
const regex = /"\W+"/gi;
const content = document.body.innerHTML.match(regex);

content.forEach((item) => {
	const string = item.toString();
	document.body.innerHTML = document.body.innerHTML.replace(string, `<mark>${string}</mark>`);
});
//                                        №4 и №6
const RegExpLink = /\w+\:\/\/\w+(\.\w+)+((\/[\w-]+)+\/)*/g;
const linkNameReg = /\w+(\.\w+)+/g;
const arrayBodyContentLink = document.body.innerText.match(RegExpLink);
const linkNames = arrayBodyContentLink.join(' ').match(linkNameReg);

arrayBodyContentLink.forEach((item, index) => {
	const string = item.toString();
	const linkName = linkNames[index].toString();
	document.body.innerHTML = document.body.innerHTML.replace(string, `<a href="${string}">${linkName}</a>`);
});
//                                          №5
const сolor = /#[a-f0-9]+/gi;
const colors = document.body.innerHTML.match(сolor);

console.log(colors);