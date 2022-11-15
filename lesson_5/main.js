// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function areaRect(a, b){
//     let area = a * b;
//     return area
// }
// let c = areaRect(4, 7)
// console.log(c);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function areaCircle(r){
//     let PI = 3.14
//     return PI * (r**2)
// }
// let x = areaCircle(4)
// console.log(x);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function areaCylinder(h, r){
//     let pi = 3.14
//     return 2* pi * r**2 + 2 * pi * r * h
// }
// console.log(areaCylinder(5, 3));

// - створити функцію яка приймає масив та виводить кожен його елемент
// function array(b){
//     for(let i = 0; i < b.length; i++){
//         console.log(b[i])
//     }
// }
// array([3, 'dfgdf', 7, true]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function createParagraph(a) {
//     document.write(`<p>${a}</p>`)
// }
// createParagraph('dcfdhf')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function createUl(b) {
//     document.write(`<ul>`)
//     for(let i = 0; i < 3; i++){
//         document.write(`<li>${b}</li>`)
//     }
//     document.write(`</ul>`)
// }
// createUl('nemt')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function createUl(b, n) {
//     document.write(`<ul>`)
//     for(let i = 0; i < n; i++){
//         document.write(`<li>${b}</li>`)
//     }
//     document.write(`</ul>`)
// }
// createUl('nemt', 15)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function arrayOfElements(a) {
//     document.write(`<ol>`)
//     for(let i = 0; i < a.length; i++){
//         document.write(`<li>${a[i]}</li>`)
//     }
//         document.write(`</ol>`)
// }
// arrayOfElements([15, 'yreyry', true, false])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// function arrayOfObjects(a) {
//     for(let x of a) {
//         document.write(`<div>`)
//         for (let y in x) {
//             document.write(` ${x[y]}`)
//         }
//         document.write(`</div>`)
//     }
// }
//
// arrayOfObjects([
//     {id: 1, name: 'Nazar', age: 19},
//     {id: 2, name: 'Igor', age: 24},
//     {id: 3, name: 'Maria', age: 48}
// ])

// - створити функцію яка повертає найменьше число з масиву
// function minNumb(a) {
//     let x = a[0]
//     for(let i = 0; i < a.length; i++){
//         if(a[i] < x){
//             x = a[i]
//         }
//     }
//     return x
// }
// let t = minNumb([325325, 523, 105, 25])
// console.log(t);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function addElementsOfArray(a){
//     let sum = 0
//     for(let x = 0; x < a.length; x++){
//     sum += a[x]
//     }
//     return sum
// }
// let t = addElementsOfArray([23, 47, 5])
// console.log(t);
