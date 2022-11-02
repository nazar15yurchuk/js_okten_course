// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let arr = [10, 'rsg', 'hrth', true, 'uttit', 55, 90, false, 'qwe', 34];
console.log(arr);

let book1 = {
    title: 'Book1',
    pageCount: 45,
    genre: 'abc'
}
let book2 = {
    title: 'Book2',
    pageCount: 15,
    genre: 'def'
}
let book3 = {
    title: 'Book3',
    pageCount: 90,
    genre: 'qwe'
}

let book4 = {
    title: 'Book4',
    pageCount: 45,
    genre: 'yui',
    autors: [name = 'Igor', age = 45]
}
let book5 = {
    title: 'Book5',
    pageCount: 15,
    genre: 'bnm',
    autors: [name = 'Nazar', age = 55]
}
let book6 = {
    title: 'Book6',
    pageCount: 90,
    genre: 'zxc',
    autors: [name = 'Ostap', age = 60]
}

let users = [
    user1 = {
        name: 'Nazar',
        username: 'ny',
        password: 1234
    },
    user2 = {
        name: 'Ostap',
        username: 'ost',
        password: 5678
    },
    user3 = {
        name: 'Igor',
        username: 'igo',
        password: 9023
    },
    user4 = {
        name: 'Orest',
        username: 'ors',
        password: 3478
    },
    user5 = {
        name: ' Maria',
        username: 'mar',
        password: 8356
    },
    user6 = {
        name: 'Serhii',
        username: 'ser',
        password: 9471
    },
    user7 = {
        name: 'Vova',
        username: 'vov',
        password: 3405
    },
    user8 = {
        name: 'Olya',
        username: 'ola',
        password: 8451
    },
    user9 = {
        name: 'Katya',
        username: 'kat',
        password: 6543
    },
    user10 = {
        name: 'Yura',
        username: 'yur',
        password: 9000
    }
];

console.log(users[0]['password'], users[1]['password'], users[2]['password'], users[3]['password'], users[4]["password"], users[5]['password'],
users[6]['password'], users[7]['password'], users[8]['password'], users[9]['password'])
