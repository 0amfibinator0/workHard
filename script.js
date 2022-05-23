const myHeaders = new Headers();
myHeaders.append("apikey", "waW3EyqLNvabS2Buy3DvZyxjDFfRPgjY");

const getData = () => {
    return fetch("https://api.apilayer.com/exchangerates_data/convert?to=RUB&from=EUR&amount=100", {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
};
getData();