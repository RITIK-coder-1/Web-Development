function fetchAPI(API) {
    fetch(API)
    .then(response => response.json())
    .then(data => console.log(data))
}

fetchAPI("https://jsonplaceholder.typicode.com/todos/1")