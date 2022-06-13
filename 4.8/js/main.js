// const users = [
//     { id: 1, firstname: "John" },
//     { id: 2, firstname: "G'aybulla" },
//     { id: 3, firstname: "Teshaboy" },
//     { id: 4, firstname: "Aleksey" },
//     { id: 5, firstname: "Yo'lchiboy" },
//     { id: 6, firstname: "Toshmat" },
//     { id: 7, firstname: "G'ishmat" },
//     { id: 8, firstname: "G'aybulla" }
// ];


// function renderUsers() {
//     userListEl.innerHTML = null;
//     users.forEach((user) => {
//         let liEl = document.createElement('li')
//         liEl.textContent = `${user.id} | ${user.firstname}`

//         userListEl.appendChild(liEl)
//     })
// }

// renderUsers()




// renderUsers()


// function syncFunc() {
//     console.log("first")
//     console.log("second")
//     console.log("third")
// }

// function asyncFunc() {
//     var users = null
//     var posts = null
//     console.log("first") // DOM elementlarini tanlab olish qadami
//     setTimeout(() => {
//         console.log("Post so'rovi tugadi")
//         posts = "Posts ma'lumoti"
//     }, 1000)
//     setTimeout(() => {
//         console.log("Post render qilindi", posts)
//     }, 1001)




//     setTimeout(() => {
//         console.log("second")
//         users = "Users ma'lumoti"
//     }, 1000) // API backenddan olib kelish
//     setTimeout(() => {
//         console.log("third", users) // DOMga ma'lumotni render qilish
//     }, 1001)
// }

// syncFunc()
// asyncFunc()


// function functionGetUsers() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const date = Date.now() // 9878921217
//             if (date % 2 === 1) resolve({ id: 1, firstname: "John" });
//             else {
//                 reject("Biz kutgan natija bo'lmadi. Sorry ")
//             }
//         }, 1000)
//     })

//     return promise
// }


// function functionGetPosts() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const date = Date.now() // 9878921217
//             if (date % 2 === 1) resolve([{ id: 1, title: "Lorem" }]);
//             else {
//                 reject("Biz kutgan natija bo'lmadi. Sorry ")
//             }
//         }, 1000)
//     })

//     return promise
// }

// var users = null
// var posts = null


// async function getAllResponse() {

// }

// ; (async function () {
//     users = await functionGetUsers()
//     posts = await functionGetPosts()
// })()

function renderUsers(users) {
    let fragment = new DocumentFragment()
    users.forEach((user) => {
        let liEl = document.createElement('li')
        liEl.textContent = `${user.id} | ${user.name}`

        fragment.appendChild(liEl)
    })
    userListEl.innerHTML = null
    userListEl.appendChild(fragment)
}


var userListEl = document.querySelector(".user-list");


fetch("https://jsonplaceholder.typicode.com/users")
    .then(respose => respose.json())
    .then(
        result => {
            renderUsers(result)
            console.log(result)
        },
        error => {
            console.error(error)
        }
    )