console.log('********* 48 *********');

function makeGreetings(lang) {

    return function (name) {
        if (lang === 'en') {
            console.log('hello' + ' ' + name);
        }
        if (lang === 'ru') {
            console.log('Privet' + ' ' + name);
        }
    }

}

const greetEnglish = makeGreetings('en');
const greetRussian = makeGreetings('ru');

function adder(a) {
    return function (b) {
        return a + b;
    }
}


const adder10 = adder(10);
const adder1 = adder(1);
const as = adder10(4);
const as1 = adder1(4);

greetRussian('Alina');
greetEnglish('Alina');
