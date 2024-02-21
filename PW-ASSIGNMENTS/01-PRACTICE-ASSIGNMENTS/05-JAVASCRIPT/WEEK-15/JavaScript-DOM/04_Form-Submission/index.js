const name = document.getElementById("name")
const password = document.getElementById("password")
const submit = document.getElementById("submit")
const email = document.getElementById("email")

submit.addEventListener("click", () => {
    if (name.value === "" || password.value === "" || email.value === ""){
        alert("Please fill up all the input fields!")
    } else if (name.value.length < 3 || password.value.length < 8) {
        alert("Form Submission Failed!")
    } else {
        alert("Form Submission Successful!")
    }
}, false)
