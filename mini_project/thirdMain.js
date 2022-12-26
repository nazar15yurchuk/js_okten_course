//     На сторінці post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформація про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let url = new URL(location.href)
let id = url.searchParams.get('id')

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(info => info.json())
    .then(data => {
    let divForPost = document.createElement('div')
        divForPost.classList.add('divForPost')
        for (const elements in data) {
            let elementsDiv = document.createElement('div')
            elementsDiv.classList.add('elementsDiv')
            elementsDiv.innerText = elements + ': ' + data[elements]
            divForPost.appendChild(elementsDiv)
        }
        document.body.append(divForPost)

        let comment = document.createElement('div')
        comment.classList.add('comment')
        comment.innerText = 'COMMENTS'
        document.body.append(comment)

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(info => info.json())
            .then(data1 => {
                let generalDivForComments = document.createElement('div')
                generalDivForComments.classList.add('generalDivForComments')
                for (const comments of data1) {
                    let commentsDiv = document.createElement('div')
                    commentsDiv.classList.add('commentsDiv')
                    for (const comment in comments) {
                        let div = document.createElement('div')
                        div.classList.add('div3')
                        div.innerText = comment + ': ' + comments[comment]
                        commentsDiv.appendChild(div)
                        generalDivForComments.append(commentsDiv)
                    }
                }
                document.body.append(generalDivForComments)
            })

    })

