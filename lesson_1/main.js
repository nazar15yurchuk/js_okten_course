// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль


let a = 'hello,';
let b = 'owu';
let c = 'com';
let d = 'ua';
let e = 1;
let f = 10;
let g = -999;
let h = 123;
const j = 3.14;
let v = 2.7;
let m = 16;
let n = true;
let l = false;
console.log(a, b,c, d, e, f, g, h, j, v, m, n, l);

let firstName = 'Nazar';
let lastName = 'Yurchuk';
let middleName = 'Orestovych';
let person = `${firstName} ${lastName} ${middleName}`;
console.log(person)

let as = 100;
console.log(typeof as);
let bb = '100';
console.log(typeof bb);
let cd = true;
console.log(typeof cd);

prompt("Enter your Name, Surname, Age");
