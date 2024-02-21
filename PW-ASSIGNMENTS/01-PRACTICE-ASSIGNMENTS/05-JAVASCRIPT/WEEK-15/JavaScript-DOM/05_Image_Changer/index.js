const heading = document.querySelector("#heading")
const button = document.querySelector("#button")
const image = document.querySelector("#image")


button.addEventListener("click", () => {
    const visible = image.style.visibility 

    if (visible === "visible"){
    image.style.visibility = "hidden" 
    heading.textContent = "Your Image is hidden."
    } else  {
        image.style.visibility = "visible" 
        heading.textContent = "Your Image is visible." 
    }
    
}, false)