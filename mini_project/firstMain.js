// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
fetch('https://jsonplaceholder.typicode.com/users')
    .then(info => info.json())
    .then(users => {
        let generalDiv = document.createElement('div')
        generalDiv.classList.add('generalDiv')
        for (const user of users) {
            let people = document.createElement('div')
            people.classList.add('people')
            let userName = document.createElement('h3')
            userName.classList.add('userName')
            let userId = document.createElement('h4')
            userId.classList.add('userId')
            userId.innerText = `${user.id}`
            userName.innerText = `${user.name}`
            let button = document.createElement('button')
            button.classList.add('btnForDescription')
            button.innerText = 'Description about Person'
            let a = document.createElement('a')
            a.href = 'user-details.html?id=' + user.id
            a.appendChild(button)
            people.append(userId, userName, a)
            generalDiv.appendChild(people)
        }
        document.body.append(generalDiv)
    })




// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)