let lang = '';

if (lang === 'ru') {
    console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
} else if (lang === 'en') {
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}

switch (lang) {
    case 'ru':
        console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
        break;
    case 'en':
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
        break;
}

const arrLang = {
    ru: () => {
        console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
    },
    en: () => {
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
    }
};

let namePerson = prompt('Ваше имя');
let checkNamePerson = namePerson === 'Артем' ? console.log('директор') :
namePerson === 'Александр' ? console.log('преподаватель') :
console.log('студент');
console.log(checkNamePerson);