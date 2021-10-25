let isString = (str) => {
    return (!parseFloat(str) && str !== null && str !== '') ? true : false;
};
let func = (arg) => {
    do {
        arg = prompt('введите строку');
    } while(!isString(arg));
    let str = arg.trim();
    if(str.length > 30) {
        str = str.substr(0, 30) + '...';
    }
};

func();