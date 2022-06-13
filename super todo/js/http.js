const API_KEY = "6c47ad6a"

async function getAllTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const result = await response.json()
    if (!result) return console.error("Error", result)
    return result
}

async function getTodo(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const result = await response.json()
    if (!result) return console.error("Error", result)
    return result
}
function getMovies(title) {
    return fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${title}`)
        .then(res => res.json())
}