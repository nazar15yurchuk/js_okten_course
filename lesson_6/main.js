// - Знайти та вивести довижину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 =  'hello world';
// console.log(str1.length);
// let str2 = 'lorem ipsum';
// console.log(str2.length);
// let str3 = 'javascript is cool';
// console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let r = 'hello world';
// console.log(r.toUpperCase());
// let e = 'lorem ipsum';
// console.log(e.toUpperCase());
// let t = 'javascript is cool';
// console.log(t.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let t = 'HELLO WORLD';
// console.log(t.toLowerCase());
// let r = 'LOREM IPSUM';
// console.log(r.toLowerCase());
// let y = 'JAVASCRIPT IS COOL';
// console.log(y.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//    let str = ' dirty string   '
//    console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     function stringToarray(str) {
//         return str.split(' ')
//     }
//     let str = stringToarray('Ревуть воли як ясла повні')
//     console.log(str);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let y = [10,8,-7,55,987,-1011,0,1050,0];
// console.log(y.map(value => {
//     return value.toString();
// }))

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меншого, або навпаки
// в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// function sortNums(nums, direction) {
//     if(direction === 'ascending'){
//     nums.sort((a, b) => {
//         if(a > b){
//             return 1
//         }
//         if(a < b){
//             return -1
//         }
//         if(a === b){
//             return 0
//         }
//         })
//     } else if(direction === 'descending'){
//         nums.sort((a, b) => {
//         if(a < b){
//             return 1
//         }
//         if(a > b){
//             return -1
//         }
//         if(a === b){
//             return 0
//         }
//     })
//     }
//     return nums
// }
// console.log(sortNums([11,21,3], 'descending'));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// console.log(coursesAndDurationArray.sort((a, b) => {
//     if(a.monthDuration > b.monthDuration){
//         return -1
//     }
//     if(a.monthDuration < b.monthDuration){
//         return 1
//     }
//     if(a.monthDuration === b.monthDuration){
//         return 0
//     }
// }))

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let c = coursesAndDurationArray.filter(users => {
//     return users.monthDuration > 5
// })
// console.log(c);

// описати колоду карт
// let deck = [
//     {cardSuit:'Spade', value: 6, color:'Black'},
//     {cardSuit:'Clubs', value: 6, color:'Black'},
//     {cardSuit:'Hearts', value: 6, color:'Red'},
//     {cardSuit:'Diamonds', value: 6, color:'Red'},
//     {cardSuit:'Spade', value: 7, color:'Black'},
//     {cardSuit:'Clubs', value: 7, color:'Black'},
//     {cardSuit:'Hearts', value: 7, color:'Red'},
//     {cardSuit:'Diamonds', value: 7, color:'Red'},
//     {cardSuit:'Spade', value: 8, color:'Black'},
//     {cardSuit:'Clubs', value: 8, color:'Black'},
//     {cardSuit:'Hearts', value: 8, color:'Red'},
//     {cardSuit:'Diamonds', value: 8, color:'Red'},
//     {cardSuit:'Spade', value: 9, color:'Black'},
//     {cardSuit:'Clubs', value: 9, color:'Black'},
//     {cardSuit:'Hearts', value: 9, color:'Red'},
//     {cardSuit:'Diamonds', value: 9, color:'Red'},
//     {cardSuit:'Spade', value: 10, color:'Black'},
//     {cardSuit:'Clubs', value: 10, color:'Black'},
//     {cardSuit:'Hearts', value: 10, color:'Red'},
//     {cardSuit:'Diamonds', value: 10, color:'Red'},
//     {cardSuit:'Spade', value: 'Jack', color:'Black'},
//     {cardSuit:'Clubs', value: 'Jack', color:'Black'},
//     {cardSuit:'Hearts', value: 'Jack', color:'Red'},
//     {cardSuit:'Diamonds', value: 'Jack', color:'Red'},
//     {cardSuit:'Spade', value: 'Queen', color:'Black'},
//     {cardSuit:'Clubs', value: 'Queen', color:'Black'},
//     {cardSuit:'Hearts', value: 'Queen', color:'Red'},
//     {cardSuit:'Diamonds', value: 'Queen', color:'Red'},
//     {cardSuit:'Spade', value: 'King', color:'Black'},
//     {cardSuit:'Clubs', value: 'King', color:'Black'},
//     {cardSuit:'Hearts', value: 'King', color:'Red'},
//     {cardSuit:'Diamonds', value: 'King', color:'Red'},
//     {cardSuit:'Clubs', value: 'Ace', color:'Black'}, // хреста
//     {cardSuit:'Spade', value: 'Ace', color:'Black'}, // піка
//     {cardSuit:'Hearts', value: 'Ace', color:'Red'}, // черва
//     {cardSuit:'Diamonds', value: 'Ace', color:'Red'} // буба
// ];
// - знайти піковий туз
// let c = deck.filter(card => {
//     if (card.value === 'Ace' && card.cardSuit === 'Spade') {
//         return card
//     }
// })
// console.log(c);


// - всі шістки
//     let findAllSix = deck.filter(card => {
//         return card.value === 6
//     })
// console.log(findAllSix);

// - всі червоні карти
//     let allReds = deck.filter(card => card.color === 'Red')
// console.log(allReds);

// - всі буби
//     let allDiamonds = deck.filter(card => card.cardSuit === 'Diamonds')
// console.log(allDiamonds);

// - всі трефи від 9 та більше
//     let clubs = deck.filter(card => card.cardSuit === 'Clubs' && card.value >= '9')
// console.log(clubs);

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// let reduce = deck.reduce((accumulator, card) => {
//     if(card.cardSuit === 'Clubs'){
//         accumulator.clubs.push(card)
//     }
//     if(card.cardSuit === 'Spade'){
//         accumulator.spades.push(card)
//     }
//     if(card.cardSuit === 'Hearts'){
//         accumulator.hearts.push(card)
//     }
//     if(card.cardSuit === 'Diamonds'){
//         accumulator.diamonds.push(card)
//     }
//     return accumulator
// }, {spades:[], diamonds:[], hearts:[], clubs:[]})
//
// console.log(reduce);