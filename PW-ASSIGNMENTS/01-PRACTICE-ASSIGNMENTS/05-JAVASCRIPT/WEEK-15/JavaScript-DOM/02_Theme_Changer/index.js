const body = document.body
const button = document.querySelector("#button")
const heading = document.querySelector("#heading")

body.style.backgroundColor = "black"
heading.style.color = "white"
heading.textContent = "This is Dark Theme."
isDark = true

button.addEventListener(("click"), () => {

    isDark = !isDark

    if (isDark){
        body.style.backgroundColor = "black"
        heading.style.color = "white"
        heading.textContent = "This is Dark Theme."
    } else {
        body.style.backgroundColor = "white"
        heading.style.color = "black"
        heading.textContent = "This is White Theme."
    }

}, false)