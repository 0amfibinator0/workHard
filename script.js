let number = 266219;
let string = String(number); // превратили число в строку
let array = string.split(''); // превратили строку в массив
let answer = array[0] * array[1] * array[2] * array[3] * array[4] * array[5];

console.log(answer);

let num = answer ** 3; // возводим степень
console.log(num);
let rezult = String(num);
let arr = rezult.split('');

console.log(arr[0], arr[1]);