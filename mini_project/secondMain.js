// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

let url = new URL(location.href)
let id = url.searchParams.get('id')

fetch('http://jsonplaceholder.typicode.com/users/' + id)
    .then(info => info.json())
    .then(data => {
        let generalDiv = document.createElement('div')
        generalDiv.classList.add('generalDiv')

        function aboutUsers(data) {
            for (const key in data) {
                if (typeof data[key] !== 'object') {
                    let infoDiv = document.createElement('div')
                    infoDiv.classList.add('infoDiv')
                    infoDiv.innerText = key + ': ' + data[key]
                    generalDiv.appendChild(infoDiv)
                }
                if (typeof data[key] === 'object') {
                    let titleInfo = document.createElement('h4')
                    titleInfo.classList.add('titleInfo')
                    titleInfo.innerText = key;
                    generalDiv.appendChild(titleInfo)
                    aboutUsers(data[key])
                }
            }

        }

        document.body.append(generalDiv)
        let buttonDiv = document.createElement('div')
        let buttonPost = document.createElement('button')
        buttonDiv.classList.add('buttonDivPostOfUser')
        buttonPost.classList.add('buttonPostOfUser')
        buttonPost.innerText = 'POST OF CURRENT USER'
        buttonDiv.appendChild(buttonPost)
        document.body.append(buttonDiv)
        aboutUsers(data)

        buttonPost.onclick = function () {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(info => info.json())
                .then(posts => {
                    let divDetails = document.createElement('div')
                    divDetails.classList.add('divDetails')
                    for (const post of posts) {
                        let divPosts = document.createElement('div')
                        divPosts.classList.add('divPosts')
                        divPosts.innerText = post.title
                        let btnDetails = document.createElement('button')
                        btnDetails.classList.add('btnDetails')
                        btnDetails.innerText = 'Details about post'
                        let a = document.createElement('a')
                        a.href = 'post-details.html?id=' + post.id
                        a.appendChild(btnDetails)
                        divPosts.appendChild(a)
                        divDetails.append(divPosts)

                        buttonPost.disabled = true
                    }
                    document.body.append(divDetails)
                })
        }

    })