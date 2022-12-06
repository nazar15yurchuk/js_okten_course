// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname , email, phone){
//     this.id = id
//     this.name = name
//     this.surname = surname
//     this.email = email
//     this.phone = phone
// }
// let array1 = []
// array1.push(new User(1, 'vasya', 'qwe', 'vasyapupkin@gmail.com', '0939943437'))
// array1.push(new User(2, 'petya', 'rty', 'petyapupkin@gmail.com', '0736852581'))
// array1.push(new User(3, 'nazar', 'uio', 'nazarpupkin@gmail.com', '0638799623'))
// array1.push(new User(4, 'ostap', 'pas', 'ostappupkin@gmail.com', '0670782355'))
// array1.push(new User(5, 'olya', 'dfg', 'olyapupkin@gmail.com', '0934565665'))
// array1.push(new User(6, 'max', 'hjk', 'maxpupkin@gmail.com', '0930852523'))
// array1.push(new User(7, 'vlad', 'lzx', 'vladpupkin@gmail.com', '0736436796'))
// array1.push(new User(8, 'igor', 'cvb', 'igorpupkin@gmail.com', '0670982308'))
// array1.push(new User(9, 'sanya', 'nme', 'sanyapupkin@gmail.com', '0633667659'))
// array1.push(new User(10, 'vova', 'has', 'vovapupkin@gmail.com', '0930897634'))
// console.log(array1);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = array1.filter( user => {
//     return user.id % 2 === 0
// })
// console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort = array1.sort((user, index) => {
//     return user.id - index.id
// })
// console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// let arrayObj = []
// arrayObj.push(new Client(1, 'vasya', 'qwe', 'vasyapupkin@gmail.com', '0939943437', ['banana', 'coffee']))
// arrayObj.push(new Client(2, 'petya', 'rty', 'petyapupkin@gmail.com', '0736852581', ['milk', 'apple', 'dfs']))
// arrayObj.push(new Client(3, 'nazar', 'uio', 'nazarpupkin@gmail.com', '0638799623', ['sdg', 'gsgdfs', 'fsg', 'gssd']))
// arrayObj.push(new Client(4, 'ostap', 'pas', 'ostappupkin@gmail.com', '0670782355', ['gww']))
// arrayObj.push(new Client(5, 'olya', 'dfg', 'olyapupkin@gmail.com', '0934565665', ['fgdf', 'gddrg', 'grdg','hdrr', 'dbtb', 'dhrdh']))
// arrayObj.push(new Client(6, 'max', 'hjk', 'maxpupkin@gmail.com', '0930852523', ['sges', 'gsrgs', 'rsgrs']))
// arrayObj.push(new Client(7, 'vlad', 'lzx', 'vladpupkin@gmail.com', '0736436796', ['rsgrs']))
// arrayObj.push(new Client(8, 'igor', 'cvb', 'igorpupkin@gmail.com', '0670982308', ['rher', 'rege', 'greg', 'grg', 'grdgr']))
// arrayObj.push(new Client(9, 'sanya', 'nme', 'sanyapupkin@gmail.com', '0633667659', ['esg', 'gsesg']))
// arrayObj.push(new Client(10, 'vova', 'has', 'vovapupkin@gmail.com', '0930897634', ['rdg', 'rgdgd', 'gdrg', 'rdgg', 'rhey', 'herhe', 'hrdth', 'otyu']))

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sort = arrayObj.sort((user, check) => {
//     return user.order.length - check.order.length
// })
// console.log(sort);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// function Car(model, manufacturer, year, maxSpeed, engineCapacity) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity
// }
// let car1 = new Car('Mercedes', 'Germany', 2022, 300, 4.0)
//
// Car.prototype.drive = function () {
//     return `їдемо зі швидкістю ${this.maxSpeed}km на годину`
// }
// console.log(car1.drive());

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// Car.prototype.info = function (){
//     console.log(this);
// }
// car1.info()

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// Car.prototype.increaseMaxSpeed = function (newSpeed) {
//     this.maxSpeed += newSpeed
// }
// car1.increaseMaxSpeed(100)
// car1.info();

// -- changeYear (newValue) - змінює рік випуску на значення newValue
// Car.prototype.changeYear = function (newValue) {
//     this.year = newValue
// }
// car1.changeYear(2014)
// car1.info()

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// Car.prototype.addDriver = function (driver) {
//     this.driver = driver
// }
// car1.addDriver('vadila')
// car1.info()

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     constructor(model, manufacturer, year, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//     drive(){
//         return `їдемо зі швидкістю ${this.maxSpeed}km на годину`
//     }
//     info(){
//         return this
//     }
//     increaseMaxSpeed(newSpeed){
//          this.maxSpeed += newSpeed
//     }
//     changeYear (newValue){
//         return this.year = newValue
//     }
//     addDriver (driver){
//         this.driver = driver
//     }
// }
// let car1 = new Car('Mercedes', 'Germany', 2022, 300, 4.0)
// console.log(car1.drive());
// // console.log(car1.info());
// car1.increaseMaxSpeed(140)
// // console.log(car1.info());
// car1.changeYear(1990)
// // console.log(car1.info());
// car1.addDriver('yarik')
// console.log(car1.info());

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//  class Cinderella {
//      constructor(name, age, legSize) {
//          this.name = name;
//          this.age = age;
//          this.legSize = legSize;
//      }
//  }
//  let array = []
// array.push(new Cinderella('ola', 30, 32))
// array.push(new Cinderella('maria', 24, 34))
// array.push(new Cinderella('tanya', 27, 38))
// array.push(new Cinderella('mola', 19, 33))
// array.push(new Cinderella('kris', 29, 39))
// array.push(new Cinderella('lola', 20, 31))
// array.push(new Cinderella('dasha', 22, 36))
// array.push(new Cinderella('dana', 23, 37))
// array.push(new Cinderella('nada', 28, 40))
// array.push(new Cinderella('ira', 35, 41))

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class prince {
//     constructor(name, age, footwear) {
//         this.name = name
//         this.age = age
//         this.footwear = footwear
//     }
// }
// let man = new prince('nazar', 45, 31)

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// let filter = array.filter( size => {
//     if(size.legSize === man.footwear){
//         return size.name
//     }
// })
// console.log(filter);

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// let foundCind = array.find(she => she.legSize === man.footwear)
// console.log(foundCind);