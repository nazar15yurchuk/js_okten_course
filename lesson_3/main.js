// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю чи четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).
//
// - Скласти розклад на тиждень за допомоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається
//     інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//     (хибноподыбне, тобто кастується до false)

//----1----
let x = prompt('Write your number');
if(x !== 0){
    console.log('It is true')
}else{
    console.log('It is false')
}

//----2----
let time = prompt('Enter a number')
if(time >= 0 && time <= 14){
    console.log('It is the first part of hour')
}else if(time >= 15 && time <= 29){
    console.log('It is the second part of hour')
}else if(time >= 30 && time <= 44){
    console.log('It is the third part of hour')
}else if(time >= 45 && time < 60){
    console.log('It is a quarter of hour')
}else{
    console.log('This is not a part of hour')
}

let day = prompt('Enter a number')
if(day > 0 && day <= 10){
    console.log('It is the first part of month')
}else if(day > 10 && day <= 20){
    console.log('It is the second part of month')
}else if(day > 20 && day <= 31) {
    console.log('It is the third part of month')
}else{
    console.log('This number is not a part of month')
}

//----3----
let y = +prompt('Enter a number od day');
switch (y) {
    case 1 :
        console.log('It is Monday');
        break;
    case 2 :
        console.log('It is Tuesday');
        break;
    case 3 :
        console.log('It is Wednesday');
        break;
    case 4:
        console.log('It is Thursday');
        break;
    case 5:
        console.log('It is Friday');
        break;
    case 6:
        console.log('It is Saturday')
        break;
    case 7:
        console.log('It is Sunday')
        break;
    default:
        console.log('It is not a number of week')
}

//----4----
let a = prompt('Enter a first number');
let b = prompt('Enter a second number');
if(a > b){
    console.log(a)
}else if(a < b){
    console.log(b)
}else{
    console.log(a, b)
}

//----5----
let x = prompt() || 'default';
console.log(x)



