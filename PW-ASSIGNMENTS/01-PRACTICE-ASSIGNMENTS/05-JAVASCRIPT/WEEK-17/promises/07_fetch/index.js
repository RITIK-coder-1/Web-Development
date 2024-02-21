const myAPI1 = fetch("https://jsonplaceholder.typicode.com/todos/1")
const myAPI2 = fetch("https://jsonplaceholder.typicode.com/posts/1")

function objectAPI(api1, api2) {
    const myObject = {
        todo: api1.then(reponse => reponse.json()),
        post: api2.then(reponse => reponse.json())
    }
    
    // After the promise resolves ------>
    
    Promise.all([myObject.todo, myObject.post])
    .then(data => {
        myObject.todo = data[0]
        myObject.post = data[1]
        console.log(myObject);
    })
}

objectAPI(myAPI1, myAPI2)

